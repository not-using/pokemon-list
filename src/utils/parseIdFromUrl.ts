export const parseIdFromUrl = (url: string) => {
  const urlSplited = url.split('/')
  const id = urlSplited[urlSplited.length - 2]
  return parseInt(id)
}
