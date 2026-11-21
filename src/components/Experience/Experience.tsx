import { ReactNode, useEffect, useRef } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import { experience, education } from "../../data/experience";
import { projects } from "../../data/projects";
import { useInView, useTilt } from "../../fx/motion";
import { RevealText } from "../../fx/RevealText";
import { duration } from "../../data/dates";

function storeLink(title: string) {
  return projects.find((project) => project.title === title)?.link;
}

function TechList({ tech }: { tech?: string[] }) {
  if (!tech || tech.length === 0) return null;
  return (
    <ul className="tech-list">
      {tech.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * One stop on the timeline. Its dot "unlocks" (fills in with a burst) the
 * first time it scrolls into view, and the card tilts toward the mouse.
 */
function TimelineItem({
  className,
  delay,
  children,
}: {
  className: string;
  delay: number;
  children: ReactNode;
}) {
  // the huge top margin means anything already scrolled past (e.g. after a menu jump) counts too
  const [ref, unlocked] = useInView<HTMLLIElement>({ rootMargin: "100000px 0px -35% 0px" });
  const tiltRef = useTilt<HTMLDivElement>(4);
  return (
    <li ref={ref} className={unlocked ? `${className} unlocked` : className}>
      <ScrollAnimation animateIn="gx-pop" duration={0.7} delay={delay}>
        <div className="card" ref={tiltRef}>
          {children}
        </div>
      </ScrollAnimation>
    </li>
  );
}

/** Fills the timeline line as you scroll through it, via the --fill CSS variable. */
function useTimelineFill() {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const reached = window.innerHeight * 0.65 - rect.top;
      const fill = Math.min(Math.max(reached / rect.height, 0), 1);
      element.style.setProperty("--fill", fill.toFixed(3));
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

  return ref;
}

export function Experience() {
  const timelineRef = useTimelineFill();

  return (
    <Container id="experience">
      <h2>
        <RevealText text="Experience" underline />
      </h2>
      <ol className="timeline" ref={timelineRef}>
        {experience.map((job, index) => {
          const length = duration(job.start, job.end);
          return (
            <TimelineItem
              key={`${job.company}-${job.role}`}
              className={job.end ? "entry" : "entry current"}
              delay={index * 100}
            >
              <header>
                <span className="period">
                  {job.start} – {job.end ?? "Present"}
                  {length && <span className="length"> · {length}</span>}
                </span>
                <h3>{job.role}</h3>
                <p className="company">
                  {job.companyUrl ? (
                    <a href={job.companyUrl} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                  {job.location && <span className="location"> · {job.location}</span>}
                </p>
              </header>

              {job.highlights && job.highlights.length > 0 && (
                <ul className="highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {job.games && job.games.length > 0 && (
                <div className="games">
                  <span className="label">Shipped</span>
                  <ul>
                    {job.games.map((title) => {
                      const link = storeLink(title);
                      return (
                        <li key={title}>
                          {link ? (
                            <a href={link} target="_blank" rel="noreferrer">
                              {title}
                            </a>
                          ) : (
                            title
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              <TechList tech={job.tech} />
            </TimelineItem>
          );
        })}

        {education.map((item, index) => (
          <TimelineItem
            key={`${item.school}-${item.degree}`}
            className="entry education"
            delay={(experience.length + index) * 100}
          >
            <header>
              <span className="period">
                Education · {item.start} – {item.end}
              </span>
              <h3>{item.degree}</h3>
              <p className="company">
                {item.school}
                {item.location && <span className="location"> · {item.location}</span>}
              </p>
            </header>
            <TechList tech={item.tech} />
          </TimelineItem>
        ))}
      </ol>
    </Container>
  );
}
