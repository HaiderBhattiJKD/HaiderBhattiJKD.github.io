import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Container } from "./styles";
import playStoreIcon from "../../assets/PlayStoreIcon.svg";
import { projects, GameProject } from "../../data/projects";
import { prefersReducedMotion, useTilt } from "../../fx/motion";
import { RevealText } from "../../fx/RevealText";

function mediaUrl(file: string) {
  return `${process.env.PUBLIC_URL}/media/${file}`;
}

/**
 * Gameplay clip that only plays while it is on screen, so several cards
 * don't decode video at once. Without a clip it shows the game icon over a
 * blurred copy of itself.
 */
function GameplayMedia({ project }: { project: GameProject }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay can be blocked (e.g. data saver); the poster stays visible.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  if (!project.video) {
    return (
      <div
        className="media placeholder"
        style={{ "--cover": `url(${project.icon})` } as CSSProperties}
      >
        <img src={project.icon} alt={`${project.title} icon`} />
      </div>
    );
  }

  return (
    <div className="media">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload={project.poster ? "none" : "metadata"}
        poster={project.poster ? mediaUrl(project.poster) : undefined}
        controls={reduceMotion}
        aria-label={`${project.title} gameplay`}
      >
        <source src={mediaUrl(project.video)} type="video/mp4" />
      </video>
      <img className="media-icon" src={project.icon} alt="" />
    </div>
  );
}

function projectStats(project: GameProject) {
  const stats: string[] = [];
  if (project.role) stats.push(project.role);
  if (project.team) stats.push(project.team);
  if (project.downloads) stats.push(`${project.downloads} downloads`);
  if (project.rating) stats.push(`★ ${project.rating}`);
  return stats;
}

function GameCard({ project, index }: { project: GameProject; index: number }) {
  const tiltRef = useTilt<HTMLElement>(10);
  const stats = projectStats(project);
  const highlights = project.highlights ?? [];
  return (
    <ScrollAnimation animateIn="gx-pop" duration={0.8} delay={(index % 3) * 120}>
      <article className="project" ref={tiltRef}>
        <GameplayMedia project={project} />
        <div className="body">
          <h3>
            {/* this link stretches over the whole card (see .card-link), so a click anywhere opens the game */}
            <a className="card-link" href={project.link} target="_blank" rel="noreferrer">
              {project.title}
              <span className="sr-only"> on Google Play</span>
            </a>
          </h3>
          {stats.length > 0 && (
            <ul className="stats">
              {stats.map((stat) => (
                <li key={stat}>{stat}</li>
              ))}
            </ul>
          )}
          {highlights.length > 0 ? (
            <>
              <h4>What I built</h4>
              <ul className="highlights">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          ) : (
            <p>{project.description}</p>
          )}
        </div>
        <footer>
          <ul className="tech-list">
            {project.tech.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          {/* just a visual badge now: the whole card is the link */}
          <span className="store-link" aria-hidden="true">
            <img src={playStoreIcon} alt="" />
          </span>
        </footer>
      </article>
    </ScrollAnimation>
  );
}

export function Project() {
  return (
    <Container id="project">
      <h2>
        <RevealText text="My Games" underline />
      </h2>
      <div className="projects">
        {projects.map((project, index) => (
          <GameCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Container>
  );
}
