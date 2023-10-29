import { pokeBaseURL } from 'constants/pokeApi'
import { getPokemonSpecies } from './getPokemonSpeciesInfo'
import fetcher from 'utils/fetcher'
import { parseIdFromUrl } from 'utils/parseIdFromUrl'

export const getEvolutioChain = async (chainId: number) => {
  const data = await fetcher(`${pokeBaseURL}/evolution-chain/${chainId}`)

  const extractEvolutionChain = async (chain: EvolutionChainDto) => {
    const species = await getPokemonSpecies(parseIdFromUrl(chain.species.url))
    const evolutions = [species]
    for (const evolution of chain.evolves_to) {
      const ids = await extractEvolutionChain(evolution)
      evolutions.push(...ids)
    }
    return evolutions
  }
  return extractEvolutionChain(data.chain)
}

type EvolutionChainDto = {
  species: { url: string }
  evolves_to: EvolutionChainDto[]
}
