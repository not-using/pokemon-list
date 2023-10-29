import { Pokemon } from 'types/Pokemon'
import { getPokemonBasic } from './getPokemonBasic'
import { getPokemonSpecies } from './getPokemonSpeciesInfo'

export const getPokemonById = async (id: number): Promise<Pokemon> => {
  const basicInfo = await getPokemonBasic(id)
  const speciesInfo = await getPokemonSpecies(id)
  return { ...basicInfo, ...speciesInfo }
}
