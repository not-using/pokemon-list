export interface Pokemon {
  id: number
  height: number
  weight: number
  type: string[]
  image: string[]

  // species data
  speciesId: number
  name: string
  genus: string
  evolutionChainId: number
}
