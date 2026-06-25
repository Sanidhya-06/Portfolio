export default function ResumeWindow() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full gap-4 p-6"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="text-5xl">📄</div>
      <div className="text-center">
        <p
          className="font-handwritten mb-1"
          style={{ fontSize: "24px", color: "var(--charcoal)" }}
        >
          Resume
        </p>
        <p style={{ fontSize: "11px", color: "var(--text-muted)" }}>
          Sanidhya Shetty Resume.pdf
        </p>
      </div>
      <div className="flex gap-3">
        <a
          href="/Sanidhya Shetty Resume.pdf"
          download
          className="skill-pill hover:opacity-70 transition-opacity"
          style={{
            textDecoration: "none",
            cursor: "pointer",
            padding: "6px 16px",
            fontSize: "12px",
            background: "var(--pink-accent)",
            color: "#fff",
            border: "none",
          }}
        >
          Download ↓
        </a>
        <a
          href="/Sanidhya Shetty Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="skill-pill hover:opacity-70 transition-opacity"
          style={{ textDecoration: "none", cursor: "pointer", padding: "6px 16px", fontSize: "12px" }}
        >
          Preview ↗
        </a>
      </div>
    </div>
  )
}
