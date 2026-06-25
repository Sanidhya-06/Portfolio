import { useContext } from "react"
import { WindowContext } from "./WindowContext"

export function useWindowStore() {
  return useContext(WindowContext)
}
