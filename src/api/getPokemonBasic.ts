import { pokeBaseURL } from 'constants/pokeApi'
import { PokemonBasicInfo } from 'types/Pokemon'
import fetcher from 'utils/fetcher'

export const getPokemonBasic = async (
  id: number,
): Promise<PokemonBasicInfo> => {
  const pokemon: PokemonDto = await fetcher(`${pokeBaseURL}/pokemon/${id}`)
  return {
    id,
    height: pokemon.height,
    weight: pokemon.weight,
    types: pokemon.types.map((type) => type.type.name),
    images: Object.values(pokemon.sprites)
      .filter((url) => typeof url === 'string')
      .map((url) => url as string),
  }
}

type PokemonDto = {
  id: number
  height: number
  weight: number
  sprites: { [key: string]: string | null | Object }
  species: { url: string }
  types: Array<{
    slot: number
    type: {
      name: string
      url: string
    }
  }>
}
