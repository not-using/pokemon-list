import { useEffect, useState } from 'react'
import { getEvolutioChain } from 'api/getEvolutionChain'
import { type PokemonSpeciesInfo } from 'types/Pokemon'
import Text from 'components/Text'

type Props = {
  evolutionChainId: number
  currentPokemonId?: number
}

const PokemonEvolution = ({ evolutionChainId, currentPokemonId }: Props) => {
  const [chain, setChain] = useState<PokemonSpeciesInfo[]>([])

  useEffect(() => {
    getEvolutioChain(evolutionChainId).then((result) => setChain(result))
  }, [evolutionChainId])

  return (
    <div>
      <Text type="subtitle">진화단계</Text>
      <div>
        {chain.map((species) => {
          const isCurrentSpecies = currentPokemonId === species.speciesId
          return (
            <Text
              key={species.name}
              className={`${isCurrentSpecies ? 'text-red-500' : ''}`}
            >
              {`${species.name} ${isCurrentSpecies ? '(현재)' : ''}`}
            </Text>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonEvolution
