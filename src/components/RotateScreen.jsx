import { useState, useEffect } from "react"

export default function RotateScreen() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const check = () => {
      const isMobile = window.innerWidth < 1024
      const isPortrait = window.innerHeight > window.innerWidth
      setShow(isMobile && isPortrait)
    }
    check()
    window.addEventListener("resize", check)
    window.addEventListener("orientationchange", check)
    return () => {
      window.removeEventListener("resize", check)
      window.removeEventListener("orientationchange", check)
    }
  }, [])

  if (!show) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "var(--wallpaper)" }}
    >
      <div className="flex flex-col items-center gap-6 px-8 text-center">
        {/* Rotating phone illustration */}
        <div className="text-6xl" style={{ animation: "spin 2s linear infinite" }}>
          📱
        </div>
        <p
          className="font-handwritten text-4xl"
          style={{ color: "var(--charcoal)" }}
        >
          rotate me
        </p>
        <p
          className="text-sm"
          style={{
            color: "var(--text-muted)",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.5,
          }}
        >
          this portfolio works best in landscape.
          <br />
          rotate your device to explore.
        </p>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(90deg); }
          75% { transform: rotate(90deg); }
          100% { transform: rotate(90deg); }
        }
      `}</style>
    </div>
  )
}
