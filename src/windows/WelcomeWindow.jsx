export default function WelcomeWindow() {
  return (
    <div
      className="flex flex-col items-center justify-center h-full px-8 py-6"
      style={{ background: "transparent" }}
    >
      <p
        className="font-handwritten text-center leading-none mb-4"
        style={{
          fontSize: "72px",
          color: "var(--charcoal)",
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        portfolio
      </p>
      <p
        className="text-center"
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "12px",
          color: "var(--text-muted)",
          letterSpacing: "0.04em",
        }}
      >
        it's a desktop. explore yourself.
      </p>
    </div>
  )
}
