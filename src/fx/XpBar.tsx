import { useEffect, useRef } from "react";

/** A segmented XP bar along the bottom of the header that fills as you scroll. */
export function XpBar() {
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (fillRef.current) {
        fillRef.current.style.clipPath = `inset(0 ${((1 - progress) * 100).toFixed(2)}% 0 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="xp-bar" aria-hidden="true">
      <div className="gx-segments" style={{ position: "absolute", inset: 0 }}>
        <div className="xp-track" />
        <div className="xp-fill" ref={fillRef} />
      </div>
    </div>
  );
}
