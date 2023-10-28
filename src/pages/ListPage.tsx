import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { getPokemons } from 'api/getPokemons'
import { PokemonsAtom } from 'atoms/pokemons'
import Text from 'components/Text'
import PokemonList from 'components/pokemon/List'

const ListPage = () => {
  const [pokemons, setPokemons] = useRecoilState(PokemonsAtom)

  useEffect( () => {
   getPokemons().then(result => setPokemons(result))
  },[])
  
  return (
    <>
      <Text type="title">포켓몬 도감</Text>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default ListPage
