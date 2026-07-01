import { useWindowStore } from "../store/useWindowStore"
import { WINDOW_CONFIGS } from "../windows/windowRegistry"

const DOCK_ITEMS = [
  { id: "about", icon: "👤", label: "About Me" },
  { id: "projects", icon: "📁", label: "Projects" },
  { id: "recents", icon: "🕐", label: "Recents" },
  { id: "resume", icon: "📄", label: "Resume", href: "/Sanidhya Shetty Resume.pdf" },
  { label: "divider" },
 {
  id: "github",
  label: "GitHub",
  href: "https://github.com/Sanidhya-06",
  icon: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="var(--charcoal)">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
},
{
  id: "linkedin",
  label: "LinkedIn",
  href: "https://www.linkedin.com/in/sanidhyashetty/",
  icon: (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="#0A66C2">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
},
  { id: "mail", icon: "✉️", label: "Mail", href: "mailto:sanidhya354@gmail.com" },
]

export default function Dock() {
  const { openWindow, openWindows, windows } = useWindowStore()

  const handleClick = (item) => {
    if (item.href) {
      window.open(item.href, "_blank")
      return
    }
    const config = WINDOW_CONFIGS[item.id]
    if (!config) return
    if (Array.isArray(config)) {
      openWindows(config)
    } else {
      openWindow(config)
    }
  }

  const isOpen = (id) => windows.some((w) => w.id === id && !w.isMinimized)

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 no-select">
      <div className="dock-glass flex items-end gap-1 px-3 py-2">
        {DOCK_ITEMS.map((item, i) => {
          if (item.label === "divider") {
            return (
              <div
                key={i}
                className="w-px self-stretch mx-1"
                style={{ background: "rgba(212, 133, 138, 0.3)" }}
              />
            )
          }
          return (
            <div key={item.id} className="flex flex-col items-center group relative">
              <button
                className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl
                  hover:scale-125 transition-transform duration-150 ease-out
                  hover:-translate-y-2 active:scale-110"
                style={{ background: "rgba(245, 218, 218, 0.4)" }}
                onClick={() => handleClick(item)}
                title={item.label}
              >
                {item.icon}
              </button>
              {/* Dot indicator if open */}
              {isOpen(item.id) && (
                <div
                  className="w-1 h-1 rounded-full mt-0.5"
                  style={{ background: "var(--pink-accent)" }}
                />
              )}
              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-xs
                  opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap"
                style={{
                  background: "rgba(44,44,44,0.75)",
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
