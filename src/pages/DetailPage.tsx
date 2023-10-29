import { useLoaderData } from 'react-router-dom'
import { Pokemon } from 'types/Pokemon'
import Text from 'components/Text'
import PokemonDetail from 'components/pokemon/Detail'

const DetailPage = () => {
  const pokemon = useLoaderData() as Pokemon

  return (
    <>
      <Text type="title">{`#${pokemon.id} ${pokemon.name}`}</Text>
      <PokemonDetail pokemon={pokemon} />
    </>
  )
}

export default DetailPage
