import { ReactNode, useEffect, useState } from "react";
import { prefersReducedMotion } from "./motion";

type Props = {
  text: string;
  /** Shown once typing finishes, e.g. emoji (they break if typed one unit at a time). */
  after?: ReactNode;
  /** ms before typing starts */
  delay?: number;
  /** ms per letter */
  speed?: number;
};

/** Types the text out letter by letter with a blinking block cursor. */
export function Typewriter({ text, after, delay = 0, speed = 60 }: Props) {
  const [reduceMotion] = useState(prefersReducedMotion);
  const [count, setCount] = useState(reduceMotion ? text.length : 0);

  useEffect(() => {
    if (reduceMotion) return;
    let interval = 0;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((current) => {
          if (current >= text.length) {
            window.clearInterval(interval);
            return current;
          }
          return current + 1;
        });
      }, speed);
    }, delay);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [reduceMotion, text, delay, speed]);

  const done = count >= text.length;
  return (
    <span className="gx-typewriter">
      <span aria-hidden="true">{text.slice(0, count)}</span>
      <span className="sr-only">{text}</span>
      {done && after && <span className="gx-after">{after}</span>}
      <span className="gx-cursor" aria-hidden="true" />
    </span>
  );
}
