import { useRecoilState } from 'recoil'
import { PokemonsAtom } from 'atoms/pokemons'
import Text from 'components/Text'
import PokemonList from 'components/pokemon/List'

const ListPage = () => {
  const [pokemons] = useRecoilState(PokemonsAtom)

  return (
    <>
      <Text type="title">포켓몬 도감</Text>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default ListPage
