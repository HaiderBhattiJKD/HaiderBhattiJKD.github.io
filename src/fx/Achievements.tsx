import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Achievement = { id: string; title: string; description: string };

/** Unlocked by scrolling to the section with the same id. */
const SECTION_ACHIEVEMENTS: Achievement[] = [
  { id: "about", title: "Character select", description: "Met the developer" },
  { id: "experience", title: "Veteran", description: "Read the career log" },
  { id: "project", title: "Game library unlocked", description: "Browsed the games" },
  { id: "contact", title: "Final level", description: "Reached the contact section" },
];

/** Unlocked by calling unlockAchievement("message"), e.g. after the form is sent. */
const EVENT_ACHIEVEMENTS: Achievement[] = [
  { id: "message", title: "Quest complete", description: "Sent a message" },
];

const ALL = [...SECTION_ACHIEVEMENTS, ...EVENT_ACHIEVEMENTS];
const EVENT_NAME = "gx-achievement";
const SHOW_MS = 3200;
const LEAVE_MS = 400;

/** Unlock an achievement from anywhere in the app. */
export function unlockAchievement(id: string) {
  window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: id }));
}

type Toast = Achievement & { count: number };

/** Xbox-style "Achievement unlocked" pop-ups, one at a time. */
export function Achievements() {
  const unlocked = useRef(new Set<string>());
  const [queue, setQueue] = useState<Toast[]>([]);
  const [leaving, setLeaving] = useState(false);
  const toast = queue[0];
  const toastId = toast?.id;

  const unlock = useCallback((id: string) => {
    const achievement = ALL.find((item) => item.id === id);
    if (!achievement || unlocked.current.has(id)) return;
    unlocked.current.add(id);
    const next = { ...achievement, count: unlocked.current.size };
    setQueue((current) => [...current, next]);
  }, []);

  // section achievements: unlock when the section crosses the middle of the screen
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            unlock(entry.target.id);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    SECTION_ACHIEVEMENTS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [unlock]);

  // event achievements
  useEffect(() => {
    const onEvent = (event: Event) => unlock((event as CustomEvent<string>).detail);
    window.addEventListener(EVENT_NAME, onEvent);
    return () => window.removeEventListener(EVENT_NAME, onEvent);
  }, [unlock]);

  // show each toast, slide it out, then show the next one
  useEffect(() => {
    if (!toastId) return;
    if (!leaving) {
      const timer = window.setTimeout(() => setLeaving(true), SHOW_MS);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setLeaving(false);
      setQueue((current) => current.slice(1));
    }, LEAVE_MS);
    return () => window.clearTimeout(timer);
  }, [toastId, leaving]);

  return (
    <Toaster role="status" aria-live="polite">
      {toast && (
        <div className={leaving ? "toast leaving" : "toast"} key={toast.id}>
          <span className="trophy" aria-hidden="true">🏆</span>
          <div>
            <p className="label">
              Achievement unlocked · {toast.count}/{ALL.length}
            </p>
            <p className="title">{toast.title}</p>
            <p className="description">{toast.description}</p>
          </div>
        </div>
      )}
    </Toaster>
  );
}

const Toaster = styled.div`
  position: fixed;
  right: 2.4rem;
  bottom: 2.4rem;
  z-index: 1100;
  pointer-events: none;

  .toast{
    display: flex;
    align-items: center;
    gap: 1.4rem;
    min-width: 28rem;
    max-width: calc(100vw - 4.8rem);
    padding: 1.2rem 2rem 1.2rem 1.2rem;
    border-radius: 999px;
    background-color: #1b1b1b;
    color: #FFF;
    border: 1px solid rgba(255, 215, 0, 0.4);
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.5), 0 0 2rem rgba(255, 215, 0, 0.15);
    animation: gx-toast-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;

    &.leaving{
      animation: gx-toast-out 0.4s ease-in both;
    }
  }

  .trophy{
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    font-size: 2.4rem;
    background: radial-gradient(circle at 35% 30%, #ffe680, #c99a00);
    animation: gx-trophy 0.8s 0.3s ease-out both;
  }

  p{
    margin: 0;
    line-height: 1.3;
  }

  .label{
    font-family: 'Press Start 2P', monospace;
    font-size: 0.9rem;
    color: #ffd700;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }

  .title{
    font-size: 1.6rem;
    font-weight: 700;
  }

  .description{
    font-size: 1.3rem;
    opacity: 0.7;
  }

  @keyframes gx-toast-in{
    from{ opacity: 0; transform: translateY(150%) scale(0.8); }
    to{ opacity: 1; transform: none; }
  }

  @keyframes gx-toast-out{
    from{ opacity: 1; transform: none; }
    to{ opacity: 0; transform: translateX(120%); }
  }

  @keyframes gx-trophy{
    0%{ transform: scale(0) rotate(-30deg); }
    60%{ transform: scale(1.25) rotate(10deg); }
    100%{ transform: scale(1) rotate(0); }
  }

  @media (max-width: 600px){
    right: 1.6rem;
    left: 1.6rem;
    bottom: 1.6rem;

    .toast{
      min-width: 0;
      max-width: none;
    }
  }
`;
