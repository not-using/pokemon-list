import { useLoaderData } from 'react-router-dom'
import { Pokemon } from 'types/Pokemon'
import Text from 'components/Text'
import PokemonDetail from 'components/pokemon/Detail'
import PokemonEvolution from 'components/pokemon/Evolution'
import styled from 'styled-components'

const DetailPage = () => {
  const pokemon = useLoaderData() as Pokemon

  return (
    <DetailWrapper>
      <Text type="title">{`#${pokemon.id} ${pokemon.name}`}</Text>
      <PokemonDetail pokemon={pokemon} />
      <PokemonEvolution
        evolutionChainId={pokemon.evolutionChainId}
        currentPokemonId={pokemon.speciesId}
      />
    </DetailWrapper>
  )
}

export default DetailPage

const DetailWrapper = styled.article`
  width: 70%;
  margin: 0 auto;
  & > div {
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
  }
  & > div > * {
    flex-basis: 10rem;
  }
  & h3 {
    flex-basis: 5rem;
    font-size: 1.2rem;
  }
`
