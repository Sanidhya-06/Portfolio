export default function MePreviewWindow() {
  return (
    <div className="p-3 h-full flex flex-col gap-3 overflow-auto">
      <img
        src="/images/me3.jpg"
        className="w-full rounded-lg object-cover"
        style={{ maxHeight: "180px" }}
      />
      <p style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
    Sanidhya Shetty
      </p>
    </div>
  )
}