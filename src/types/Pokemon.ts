export interface Pokemon {
  id: number
  height: number
  weight: number
  types: string[]
  images: string[]

  // species data
  speciesId: number
  name: string
  genus: string
  evolutionChainId: number
}
