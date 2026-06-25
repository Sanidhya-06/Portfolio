import { useSelectionStore } from "../store/selectionStore"
import { recents } from "../data/recents"

const allRecents = [...recents[2026], ...recents[2025]]

export default function RecentsPreviewWindow() {
  const { selectedRecentId } = useSelectionStore()
  const item = allRecents.find((recent) => recent.id === selectedRecentId)
  const images = item?.images?.slice(0, 3) ?? []

  if (!images.length) {
    return (
      <div
        className="flex items-center justify-center h-full"
        style={{ color: "var(--text-muted)", fontSize: "12px", fontFamily: "Inter" }}
      >
        no preview available
      </div>
    )
  }

  return (
    <div className="p-3 h-full flex flex-col gap-2">
      <div
        className="grid flex-1 min-h-0 gap-2"
        style={{
          gridTemplateColumns: `repeat(${Math.min(images.length, 2)}, minmax(0, 1fr))`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${item.title} preview ${index + 1}`}
            className="w-full h-full rounded-lg object-cover min-h-0"
            style={images.length === 3 && index === 0 ? { gridRow: "span 2" } : undefined}
          />
        ))}
      </div>
      <p style={{ fontSize: "11px", color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}>
        {item.title} · {item.date}
      </p>
    </div>
  )
}
