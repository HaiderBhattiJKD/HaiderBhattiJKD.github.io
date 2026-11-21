import { CSSProperties, useEffect, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";
import { projects, showreel } from "../data/projects";
import { prefersReducedMotion } from "./motion";

const CYCLE_MS = 3500;

function mediaUrl(file: string) {
  return `${process.env.PUBLIC_URL}/media/${file}`;
}

/**
 * A handheld console. Its screen plays the showreel if there is one, and
 * otherwise works as a "select game" screen: it cycles through the games,
 * the D-pad flips between them, A opens the game on Google Play and B jumps
 * to the games section.
 */
export function GameScreen() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion] = useState(prefersReducedMotion);
  const count = projects.length;
  const game = projects[index];
  const hasVideo = Boolean(showreel.video);

  useEffect(() => {
    if (hasVideo || paused || reduceMotion || count < 2) return;
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % count), CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [hasVideo, paused, reduceMotion, count]);

  const previous = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <Console
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="dpad" role="group" aria-label="Browse games">
        <span className="up" aria-hidden="true" />
        <button type="button" className="left" onClick={previous} aria-label="Previous game" disabled={hasVideo} />
        <span className="center" aria-hidden="true" />
        <button type="button" className="right" onClick={next} aria-label="Next game" disabled={hasVideo} />
        <span className="down" aria-hidden="true" />
      </div>

      <div className="screen">
        {hasVideo ? (
          <video
            src={mediaUrl(showreel.video!)}
            poster={showreel.poster ? mediaUrl(showreel.poster) : undefined}
            autoPlay={!reduceMotion}
            controls={reduceMotion}
            muted
            loop
            playsInline
            aria-label="Gameplay showreel"
          />
        ) : (
          // the key re-mounts the slide so its entrance animation replays
          <div className="slide" key={index} style={{ "--cover": `url(${game.icon})` } as CSSProperties}>
            <p className="label">Select game</p>
            <img src={game.icon} alt="" />
            <p className="title">{game.title}</p>
            <p className="counter" aria-hidden="true">
              ◀ {index + 1} / {count} ▶
            </p>
          </div>
        )}
        <span className="scanlines" aria-hidden="true" />
      </div>

      <div className="face">
        <a
          className="btn a"
          href={hasVideo ? "#project" : game.link}
          target={hasVideo ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={hasVideo ? "See my games" : `Open ${game.title} on Google Play`}
        >
          A
        </a>
        <NavHashLink smooth to="#project" className="btn b" aria-label="See all my games">
          B
        </NavHashLink>
        <span className="hint" aria-hidden="true">A play · B all</span>
      </div>
    </Console>
  );
}

const Console = styled.div`
  display: grid;
  grid-template-columns: 9rem 1fr 9rem;
  grid-template-areas: "dpad screen face";
  align-items: center;
  gap: 1.6rem;
  width: min(56rem, 100%);
  padding: 2rem 1.6rem;
  border-radius: 4rem;
  background: linear-gradient(160deg, var(--surface-2), var(--surface));
  border: 1px solid rgba(var(--primary-rgb), 0.35);
  box-shadow:
    0 0 0 0.4rem rgba(var(--bg-rgb), 0.6),
    0 0 4rem rgba(var(--primary-rgb), 0.25),
    0 0 8rem rgba(var(--secondary-rgb), 0.15),
    inset 0 0.2rem 0 rgba(255, 255, 255, 0.06);
  animation: gx-console-float 5s ease-in-out infinite;

  /* gentle bob; small enough that the buttons stay easy to click */
  @keyframes gx-console-float{
    0%, 100%{ transform: translateY(0); }
    50%{ transform: translateY(-0.6rem); }
  }

  /* ----- screen ----- */
  .screen{
    grid-area: screen;
    position: relative;
    aspect-ratio: 4 / 3;
    border-radius: 1.2rem;
    overflow: hidden;
    background-color: #05050f;
    border: 0.3rem solid #05050f;
    box-shadow: 0 0 0 1px rgba(var(--primary-rgb), 0.5), 0 0 2rem rgba(var(--primary-rgb), 0.35);

    video{
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  /* CRT scanlines and a soft vignette over the screen */
  .scanlines{
    position: absolute;
    inset: 0;
    pointer-events: none;
    background:
      repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.22) 0 1px, transparent 1px 3px),
      radial-gradient(ellipse at center, transparent 55%, rgba(0, 0, 0, 0.55));
  }

  .slide{
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    color: #fff;
    text-align: center;
    padding: 1rem;
    /* own layer, so the blurred background below stays inside the screen */
    isolation: isolate;
    animation: gx-slide-in 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);

    /* blurred, darkened copy of the icon as the background */
    &::before{
      content: "";
      position: absolute;
      inset: -2rem;
      background: var(--cover) center / cover no-repeat;
      filter: blur(1.6rem) brightness(0.45) saturate(1.3);
      z-index: -1;
    }

    img{
      width: 38%;
      max-width: 13rem;
      aspect-ratio: 1;
      border-radius: 18%;
      box-shadow: 0 0 0 0.3rem rgba(255, 255, 255, 0.9), 0 0 2.4rem rgba(var(--primary-rgb), 0.8);
      animation: gx-float 2.4s ease-in-out infinite;
    }
  }

  .slide .label, .slide .counter{
    font-family: 'Press Start 2P', monospace;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
  }

  .slide .label{
    color: #00e5ff;
    animation: gx-blink 1.2s steps(1) infinite;
  }

  .slide .title{
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.8);
  }

  .slide .counter{
    color: rgba(255, 255, 255, 0.7);
  }

  @keyframes gx-slide-in{
    from{ opacity: 0; transform: translateX(3rem) scale(0.92); }
    to{ opacity: 1; transform: none; }
  }

  /* ----- D-pad ----- */
  .dpad{
    grid-area: dpad;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(3, 2.6rem);
    grid-template-rows: repeat(3, 2.6rem);
    grid-template-areas:
      ". up ."
      "left center right"
      ". down .";

    span, button{
      background-color: #262650;
      border: none;
      border-radius: 0.4rem;
      padding: 0;
      box-shadow: 0 0.3rem 0 #121230;
    }

    .up{ grid-area: up; }
    .down{ grid-area: down; }
    .center{ grid-area: center; border-radius: 0; box-shadow: none; }

    button{
      position: relative;
      cursor: pointer;
      transition: transform 0.08s, box-shadow 0.08s, background-color 0.15s;

      /* little arrow */
      &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        border: 0.5rem solid transparent;
        transform: translate(-50%, -50%);
      }

      &:hover{
        background-color: #303066;
        filter: none;
      }

      &:active{
        transform: translateY(0.3rem);
        box-shadow: 0 0 0 #121230;
      }

      &:focus-visible{
        outline: 2px solid var(--primary);
        outline-offset: 2px;
      }

      &:disabled{
        cursor: default;
        filter: none;
      }
    }

    .left{
      grid-area: left;
      &::after{ border-right-color: var(--primary); margin-left: -0.3rem; }
    }

    .right{
      grid-area: right;
      &::after{ border-left-color: var(--primary); margin-left: 0.3rem; }
    }
  }

  /* ----- A / B buttons ----- */
  .face{
    grid-area: face;
    position: relative;
    justify-self: center;
    width: 8.4rem;
    height: 8.4rem;

    .btn{
      position: absolute;
      display: grid;
      place-items: center;
      width: 3.8rem;
      height: 3.8rem;
      border-radius: 50%;
      font-family: 'Press Start 2P', monospace;
      font-size: 1.2rem;
      color: #0b0b1a;
      transition: transform 0.08s, box-shadow 0.08s, filter 0.15s;

      &:hover{
        filter: brightness(1.15);
      }

      &:active{
        transform: translateY(0.3rem);
      }

      &:focus-visible{
        outline: 2px solid var(--text);
        outline-offset: 2px;
      }
    }

    .a{
      right: 0;
      top: 0.6rem;
      background-color: var(--secondary);
      box-shadow: 0 0.3rem 0 #9a1680, 0 0 1.6rem rgba(var(--secondary-rgb), 0.6);
      &:active{ box-shadow: 0 0 0 #9a1680, 0 0 1rem rgba(var(--secondary-rgb), 0.6); }
    }

    .b{
      left: 0;
      bottom: 1.4rem;
      background-color: var(--primary);
      box-shadow: 0 0.3rem 0 var(--primary-shade), 0 0 1.6rem rgba(var(--primary-rgb), 0.6);
      &:active{ box-shadow: 0 0 0 var(--primary-shade), 0 0 1rem rgba(var(--primary-rgb), 0.6); }
    }

    .hint{
      position: absolute;
      left: 50%;
      bottom: -1.4rem;
      transform: translateX(-50%);
      white-space: nowrap;
      font-size: 1.1rem;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 0.08rem;
    }
  }

  /* phones: screen on top, controls in a row underneath */
  @media (max-width: 600px){
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "screen screen"
      "dpad face";
    row-gap: 2.4rem;
    padding: 1.6rem 1.6rem 3.2rem;
    border-radius: 2.8rem;
  }
`;
