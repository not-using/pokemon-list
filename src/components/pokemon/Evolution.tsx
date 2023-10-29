import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getEvolutioChain } from 'api/getEvolutionChain'
import { PokemonSpeciesInfo } from 'types/Pokemon'
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
      {chain.map((species) => {
        const isCurrentSpecies = currentPokemonId === species.speciesId
        return (
          <Species key={species.name} isCurrentSpecies={isCurrentSpecies}>
            {`${species.name} ${isCurrentSpecies ? '(현재)' : ''}`}
          </Species>
        )
      })}
    </div>
  )
}

export default PokemonEvolution

const Species = styled(Text)<{ isCurrentSpecies: boolean }>`
  color: ${(props) => (props.isCurrentSpecies ? 'red' : 'inherit')};
`
