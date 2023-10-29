import { pokeBaseURL } from 'constants/pokeApi'
import { PokemonSpeciesInfo } from 'types/Pokemon'
import { fetcher } from 'utils/fetcher'
import { parseIdFromUrl } from 'utils/parseIdFromUrl'

export const getPokemonSpecies = async (
  id: number,
): Promise<PokemonSpeciesInfo> => {
  const species: PokemonSpeciesDto = await fetcher(
    `${pokeBaseURL}/pokemon-species/${id}`,
  )
  return {
    speciesId: id,
    name: species.names.find((name) => name.language.name === 'ko')!.name,
    genus: species.genera.find((genus) => genus.language.name === 'ko')!.genus,
    evolutionChainId: parseIdFromUrl(species.evolution_chain.url),
  }
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
