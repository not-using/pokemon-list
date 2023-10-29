export interface Pokemon extends PokemonBasicInfo, PokemonSpeciesInfo {}

export interface PokemonBasicInfo {
  id: number
  height: number
  weight: number
  types: string[]
  images: string[]
}

export interface PokemonSpeciesInfo {
  speciesId: number
  name: string
  genus: string
  evolutionChainId: number
}
