const TRASH_ITEMS = [
  { name: "figma_v47_FINAL_final.fig", size: "284 MB" },
  { name: "todo_app_idea.txt", size: "1 KB" },
  { name: "sleep_schedule.notion", size: "0 KB" },
  { name: "hackathon_idea_rejected.pdf", size: "3 KB" },
  { name: "UI_that_wasnt_it.png", size: "12 MB" },
  { name: "README_i_never_wrote.md", size: "0 KB" },
  { name: "2am_code.py", size: "47 KB" },
  { name: "pitch_deck_v1_through_v23.pptx", size: "18 MB" },
]

export default function TrashWindow() {
  return (
    <div className="p-4 h-full overflow-auto" style={{ fontFamily: "Inter, sans-serif" }}>
      <p
        style={{
          fontSize: "10px",
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
          marginBottom: "12px",
        }}
      >
        9 ITEMS — things that didn't make it
      </p>

      <div className="flex flex-col gap-1">
        {TRASH_ITEMS.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-pink-50 transition-colors"
            style={{ borderBottom: "1px solid rgba(212, 133, 138, 0.08)" }}
          >
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "14px" }}>🗑</span>
              <span style={{ fontSize: "11px", color: "var(--charcoal)" }}>{item.name}</span>
            </div>
            <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>{item.size}</span>
          </div>
        ))}

        <div
          className="mt-4 p-3 rounded-lg text-center"
          style={{ background: "rgba(212, 133, 138, 0.06)", border: "1px dashed rgba(212, 133, 138, 0.3)" }}
        >
          <p style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.6 }}>
            every good portfolio has a trash can full of things
            <br />
            that taught it something.
          </p>
        </div>
      </div>
    </div>
  )
}
