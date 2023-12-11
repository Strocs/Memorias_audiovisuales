import type { GetPath } from "../types/GetPath"

export const getPath: GetPath = (str) => {
  return str.replaceAll(/\s/g, '-').toLowerCase()
}
