import { useState } from "react"
import { recents } from "../data/recents"
import { useSelectionStore } from "../store/selectionStore"

const years = [2026, 2025]

export default function RecentsWindow() {
  const { selectedRecentId, selectRecent } = useSelectionStore()
  const [selected, setSelected] = useState(selectedRecentId)

  const handleSelect = (id) => {
    setSelected(id)
    selectRecent(id)
  }

  const allItems = [...recents[2026], ...recents[2025]]
  const item = allItems.find((i) => i.id === selected)

  return (
    <div className="flex h-full" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Sidebar */}
      <div className="finder-sidebar w-44 flex-shrink-0 py-3 overflow-auto">
        {years.map((year) => (
          <div key={year} className="mb-2">
            <p
              style={{
                fontSize: "10px",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                padding: "0 12px",
                marginBottom: "4px",
                fontWeight: 600,
              }}
            >
              {year}
            </p>
            {recents[year].map((evt) => (
              <button
                key={evt.id}
                className="w-full text-left px-3 py-2 flex items-start gap-2 transition-colors"
                style={{
                  background: selected === evt.id ? "rgba(212, 133, 138, 0.18)" : "transparent",
                  color: selected === evt.id ? "var(--pink-accent)" : "var(--charcoal)",
                  fontSize: "11px",
                  fontWeight: selected === evt.id ? 500 : 400,
                  borderRadius: "6px",
                  margin: "0 4px",
                  lineHeight: 1.3,
                }}
                onClick={() => handleSelect(evt.id)}
              >
                <span style={{ fontSize: "12px", marginTop: "1px", flexShrink: 0 }}>
                  {evt.tag.startsWith("🥇") ? "🥇" :
                   evt.tag.startsWith("🥈") ? "🥈" :
                   evt.tag.startsWith("🏆") ? "🏆" :
                   evt.tag.startsWith("⭐") ? "⭐" :
                   "📄"}
                </span>
                <span className="truncate">{evt.title}</span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Detail pane */}
      {item && (
        <div className="flex-1 p-5 overflow-auto">
          <div className="flex items-start justify-between gap-3 mb-1">
            <h2
              className="font-handwritten"
              style={{ fontSize: "22px", color: "var(--charcoal)", fontWeight: 700, lineHeight: 1.2, paddingLeft: "8px", marginTop: "8px" }}
            >
              {item.title}
            </h2>
            <span
              className="text-xs px-2 py-1 rounded-full flex-shrink-0 mt-1"
              style={{
                background: `${item.tagColor}18`,
                color: item.tagColor,
                fontWeight: 600,
                fontSize: "10px",
                border: `1px solid ${item.tagColor}30`,
                marginRight: "8px",
                marginTop: "4px",
                padding: "2px 6px",
              }}
            >
              {item.tag}
            </span>
          </div>

          <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "2px", paddingLeft: "8px" }}>
            {item.subtitle}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span style={{ fontSize: "10px", color: "var(--pink-accent)", fontWeight: 500, paddingLeft: "8px" }}>
              {item.org}
            </span>
            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>·</span>
            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>{item.date}</span>
          </div>

          <div
            className="w-full h-px mb-4"
            style={{ background: "var(--border)" }}
          />

          {item.role && (
            <p
              className="mb-3 text-xs font-medium"
              style={{ color: "var(--pink-accent)", paddingLeft: "8px" }}
            >
              Role: {item.role}
            </p>
          )}

          <p
            style={{
              fontSize: "12px",
              color: "var(--charcoal)",
              lineHeight: 1.75,
              whiteSpace: "pre-line",
              paddingLeft: "8px",
            }}
          >
            {item.description}
          </p>
        </div>
      )}
    </div>
  )
}
