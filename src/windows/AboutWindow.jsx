import { about } from "../data/about"

export default function AboutWindow() {
  return (
    <div className="p-10 h-full overflow-auto" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="mb-4">
        <h1
          className="Name-Title"
          style={{ fontSize: "32px", color: "var(--charcoal)", fontWeight: 700, paddingLeft: "16px", paddingTop: "4px" }}
        >
          {about.name}
        </h1>
        <p style={{ fontSize: "11px", color: "var(--pink-accent)", fontWeight: 500, letterSpacing: "0.06em", paddingLeft: "16px" }}>
          {about.tagline}
        </p>
      </div>

      <div className="about-bio" style={{ paddingLeft: "8px" }}>
        <p style={{ fontSize: "12px", color: "var(--charcoal)", lineHeight: 1.7, whiteSpace: "pre-line", paddingLeft: "12px", paddingRight: "4px" }}>
          {about.bio}
        </p>
      </div>

      <div
        className="line-separator"
        style={{ borderTop: "3px solid var(--border)", paddingLeft: "8px" }}
      >
        <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "8px", paddingLeft: "4px", paddingTop: "4px"}}>
          CONTACT
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href={`mailto:${about.email}`}
            className="skill-pill hover:opacity-70 transition-opacity"
            style={{ textDecoration: "none", cursor: "pointer", paddingLeft: "8px" }}
          >
            ✉ {about.email}
          </a>
          <a
            href={about.github}
            target="_blank"
            rel="noreferrer"
            className="skill-pill hover:opacity-70 transition-opacity"
            style={{ textDecoration: "none", cursor: "pointer", paddingLeft: "8px" }}
          >
            ⌨ GitHub
          </a>
          <a
            href={about.linkedin}
            target="_blank"
            rel="noreferrer"
            className="skill-pill hover:opacity-70 transition-opacity"
            style={{ textDecoration: "none", cursor: "pointer", paddingLeft: "8px" }}
          >
            🔗 LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
