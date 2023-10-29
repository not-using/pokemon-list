import { LIMIT, pokeBaseURL } from 'constants/pokeApi'
import { Pokemon } from 'types/Pokemon'
import fetcher from 'utils/fetcher'
import { parseIdFromUrl } from 'utils/parseIdFromUrl'

export const getPokemons = async (offset: number = 0): Promise<Pokemon[]> => {
  const range = Array.from({ length: LIMIT }, (_, i) => i + offset + 1)
  const pokemons = await Promise.all(
    range.map(async (id) => getPokemonById(id)),
  )
  return pokemons
}

const getPokemonById = async (id: number): Promise<Pokemon> => {
  const pokemon: PokemonDto = await fetcher(`${pokeBaseURL}/pokemon/${id}`)
  const speciesId = parseIdFromUrl(pokemon.species.url)
  const species: PokemonSpeciesDto = await fetcher(
    `${pokeBaseURL}/pokemon-species/${speciesId}`,
  )

  return {
    id,
    height: pokemon.height,
    weight: pokemon.weight,
    type: pokemon.types.map((type) => type.type.name),
    image: Object.values(pokemon.sprites).filter(
      (url) => typeof url === 'string',
    ) as string[],
    speciesId: speciesId,
    name: species.names.find((name) => name.language.name === 'ko')!.name,
    genus: species.genera.find((genus) => genus.language.name === 'ko')!.genus,
    evolutionChainId: parseIdFromUrl(species.evolution_chain.url),
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

type PokemonSpeciesDto = {
  genera: Array<{
    genus: string
    language: { name: string }
  }>
  names: Array<{
    name: string
    language: { name: string }
  }>
  evolution_chain: { url: string }
}
