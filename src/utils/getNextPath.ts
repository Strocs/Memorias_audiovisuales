import { GRADUATES } from "@data/GRADUATES"
import { getPath } from "./getPath"
import type { GetPath } from "../types/GetPath"

export const getNextPath: GetPath = (actualPath) => {
  const graduatesPath = GRADUATES.map(graduate => getPath(graduate.name))
  const actualPathIndex = graduatesPath.indexOf(getPath(actualPath))
  return graduatesPath[actualPathIndex + 1] || graduatesPath[0]
}
