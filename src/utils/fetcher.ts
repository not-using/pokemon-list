import { cacheStorage } from './cacheStorage'

export const fetcher = async (url: string) => {
  const cachedData = await cacheStorage.match(url)
  if (cachedData) {
    return cachedData.json()
  }

  const freshData = await fetch(url)
  await cacheStorage.put(url, freshData.clone())
  return freshData.json()
}

export default fetcher
