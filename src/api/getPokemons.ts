import { LIMIT } from 'constants/pokeApi'
import { Pokemon } from 'types/Pokemon'
import { getPokemonById } from './getPokemonById'

export const getPokemons = async (offset: number = 0): Promise<Pokemon[]> => {
  const range = Array.from({ length: LIMIT }, (_, i) => i + offset + 1)
  const pokemons = await Promise.all(range.map((id) => getPokemonById(id)))
  return pokemons
}
