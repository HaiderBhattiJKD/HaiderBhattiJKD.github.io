import { RefObject, useEffect, useRef, useState } from "react";

export function prefersReducedMotion() {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/** True on devices with a real mouse (not touch screens). */
export function hasFinePointer() {
  try {
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  } catch {
    return false;
  }
}

type InViewOptions = {
  /** Stop watching after the first time it comes into view. Default true. */
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/** Returns a ref and whether that element is (or has been) on screen. */
export function useInView<T extends Element>({
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0,
}: InViewOptions = {}): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return [ref, inView];
}

/**
 * 3D tilt toward the mouse, plus a glare position, written as CSS variables
 * (--rx, --ry, --gx, --gy) on the element. Does nothing on touch screens or
 * with reduced motion turned on.
 */
export function useTilt<T extends HTMLElement>(maxDegrees = 8): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !hasFinePointer() || prefersReducedMotion()) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        element.style.setProperty("--rx", `${((0.5 - y) * maxDegrees).toFixed(2)}deg`);
        element.style.setProperty("--ry", `${((x - 0.5) * maxDegrees).toFixed(2)}deg`);
        element.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
        element.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      element.style.setProperty("--rx", "0deg");
      element.style.setProperty("--ry", "0deg");
    };

    element.addEventListener("pointermove", onMove);
    element.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", onMove);
      element.removeEventListener("pointerleave", onLeave);
    };
  }, [maxDegrees]);

  return ref;
}
