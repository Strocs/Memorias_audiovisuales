import { GRADUATES } from "@data/GRADUATES"
import { getPath } from "./getPath"
import type { GetPath } from "../types/GetPath"

export const getPrevPath: GetPath = (actualPath) => {
  const graduatesPath = GRADUATES.map(graduate => getPath(graduate.name))
  const actualPathIndex = graduatesPath.indexOf(getPath(actualPath))
  if (actualPathIndex === 0) return graduatesPath[graduatesPath.length - 1]
  return graduatesPath[actualPathIndex - 1]
}
