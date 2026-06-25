import { useRef, useEffect } from "react"
import { useWindowStore } from "../store/useWindowStore"

export default function Window({
  id,
  title,
  x,
  y,
  width,
  height,
  zIndex,
  isMinimized,
  children,
}) {
  const { closeWindow, minimizeWindow, focusWindow, moveWindow } = useWindowStore()
  const dragRef = useRef(null)
  const offsetRef = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  useEffect(() => {
    const onMouseMove = (e) => {
      if (!isDragging.current) return
      const nx = e.clientX - offsetRef.current.x
      const ny = e.clientY - offsetRef.current.y
      moveWindow(
        id,
        Math.max(0, Math.min(nx, window.innerWidth - width)),
        Math.max(28, Math.min(ny, window.innerHeight - 60))
      )
    }
    const onMouseUp = () => { isDragging.current = false }
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [id, width, moveWindow])

  const onTitleBarMouseDown = (e) => {
    if (e.target.closest(".traffic-btn")) return
    isDragging.current = true
    offsetRef.current = { x: e.clientX - x, y: e.clientY - y }
    focusWindow(id)
  }

  if (isMinimized) return null

  return (
    <div
      className="window-glass window-enter absolute no-select"
      style={{ left: x, top: y, width, zIndex, minHeight: height }}
      onMouseDown={() => focusWindow(id)}
      ref={dragRef}
    >
      {/* Title bar */}
      <div
        className="titlebar-glass flex items-center px-3 py-2 cursor-grab active:cursor-grabbing"
        onMouseDown={onTitleBarMouseDown}
      >
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5 traffic-btn">
          <button
            className="w-3 h-3 rounded-full traffic-red hover:brightness-90 transition-all"
            onClick={(e) => { e.stopPropagation(); closeWindow(id) }}
          />
          <button
            className="w-3 h-3 rounded-full traffic-yellow hover:brightness-90 transition-all"
            onClick={(e) => { e.stopPropagation(); minimizeWindow(id) }}
          />
          <button
            className="w-3 h-3 rounded-full traffic-green hover:brightness-90 transition-all"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
        {/* Title */}
        <span
          className="flex-1 text-center text-xs font-medium pointer-events-none"
          style={{ color: "var(--text-muted)", fontFamily: "Inter, sans-serif" }}
        >
          {title}
        </span>
        {/* Spacer to balance traffic lights */}
        <div className="w-12" />
      </div>

      {/* Window content */}
      <div
        className="overflow-auto"
        style={{ height: height - 36, cursor: "default" }}
      >
        {children}
      </div>
    </div>
  )
}
