import { useLoaderData } from 'react-router-dom'
import { Pokemon } from 'types/Pokemon'
import Text from 'components/Text'
import PokemonDetail from 'components/pokemon/Detail'
import PokemonEvolution from 'components/pokemon/Evolution'

const DetailPage = () => {
  const pokemon = useLoaderData() as Pokemon

  return (
    <>
      <Text type="title">{`#${pokemon.id} ${pokemon.name}`}</Text>
      <PokemonDetail pokemon={pokemon} />
      <PokemonEvolution
        evolutionChainId={pokemon.evolutionChainId}
        currentPokemonId={pokemon.speciesId}
      />
    </>
  )
}

export default DetailPage
