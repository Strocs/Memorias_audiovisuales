type GetPath = (a: string) => string

export const getPath: GetPath = (str) => {
  return str.replaceAll(/\s/g, '-').toLowerCase()
}
