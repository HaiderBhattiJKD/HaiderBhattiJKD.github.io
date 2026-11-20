import { CSSProperties, Fragment } from "react";
import { useInView } from "./motion";

type Props = {
  text: string;
  /** ms before the first letter drops */
  delay?: number;
  /** ms between letters */
  stagger?: number;
  /** Show a loading-bar underline that fills after the letters land. */
  underline?: boolean;
};

/**
 * Game title-card reveal: each letter drops in and bounces, one after another,
 * when the text scrolls into view. Screen readers get the plain text.
 */
export function RevealText({ text, delay = 0, stagger = 40, underline = false }: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>({ rootMargin: "0px 0px -10% 0px" });
  const words = text.split(" ");
  let index = 0;

  const letterCount = text.replace(/\s/g, "").length;
  const barDelay = delay + letterCount * stagger + 250;

  return (
    <span ref={ref} className={inView ? "gx-reveal play" : "gx-reveal"}>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <Fragment key={`${word}-${w}`}>
            {/* words stay whole; lines can break at the spaces between them */}
            <span className="gx-word">
              {Array.from(word).map((char) => {
                const style = { animationDelay: `${delay + index * stagger}ms` } as CSSProperties;
                index += 1;
                return (
                  <span className="gx-letter" style={style} key={index}>
                    {char}
                  </span>
                );
              })}
            </span>
            {w < words.length - 1 && " "}
          </Fragment>
        ))}
      </span>
      <span className="sr-only">{text}</span>
      {underline && (
        <span
          className="gx-underline"
          aria-hidden="true"
          style={{ "--bar-delay": `${barDelay}ms` } as CSSProperties}
        />
      )}
    </span>
  );
}
