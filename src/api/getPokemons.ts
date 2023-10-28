import { LIMIT, pokeBaseURL } from 'constants/pokeApi'
import { Pokemon } from 'types/Pokemon'

export const getPokemons = async (offset: number = 0): Promise<Pokemon[]> => {
  const url = `${pokeBaseURL}/pokemon?limit=${LIMIT}&offset=${offset}`
  const pokemons = await fetch(url)
    .then((res) => res.json())
    .then((res) => res.results)

  return pokemons.map((pokemon: { url: string; name: string }) => ({
    id: pokemon.url.split('/')[6],
    name: pokemon.name,
  }))
}
