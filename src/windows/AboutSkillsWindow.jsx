import { about } from "../data/about"

export default function AboutSkillsWindow() {
  return (
    <div className="Skill-Title" style={{ fontFamily: "Inter, sans-serif" }}>
      <p
        style={{
          fontSize: "10px",
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
          marginBottom: "4px",
          marginTop: "2px",
          paddingLeft: "8px",
          paddingTop: "4px",
        }}
      >
        SKILLS
      </p>

      {Object.entries(about.skills).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <p
            style={{
              fontSize: "10px",
              color: "var(--pink-accent)",
              fontWeight: 600,
              letterSpacing: "0.06em",
              marginBottom: "4px",
              paddingLeft: "8px",
              marginTop: "4px",
            }}
          >
            {category.toUpperCase()}
          </p>
          <div className="skill-pill-container flex flex-wrap gap-1.5 mb-3" style={{ paddingLeft: "8px", paddingRight: "8px", marginBottom: "4px" }}>
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div
        className="bottom-section"
        style={{ borderTop: "5px solid var(--border)", paddingLeft: "8px" }}
      >
        <p style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.5, paddingLeft: "4px", paddingTop: "4px" }}>
           {about.sports}
        </p>
      </div>
    </div>
  )
}
