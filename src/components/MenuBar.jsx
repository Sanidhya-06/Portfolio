import { useState, useEffect } from "react"

export default function MenuBar() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 h-7 z-50 no-select"
      style={{
        background: "rgba(242, 235, 227, 0.72)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(212, 133, 138, 0.15)",
        fontFamily: "Inter, sans-serif",
        fontSize: "13px",
      }}
    >
      <div className="flex items-center gap-4">
        <span style={{ color: "var(--charcoal)", fontWeight: 600 }}>✦</span>
        <span style={{ color: "var(--charcoal)", fontWeight: 500 }}>Sanidhya</span>
        <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>File</span>
        <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>View</span>
        <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>Window</span>
      </div>
      <div className="flex items-center gap-3">
        <span style={{ color: "var(--text-muted)" }}>☁</span>
        <span style={{ color: "var(--charcoal)", fontWeight: 500 }}>{time}</span>
      </div>
    </div>
  )
}
