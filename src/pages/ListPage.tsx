import { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { useObserver } from 'hooks/useObserver'
import { getPokemons } from 'api/getPokemons'
import { PokemonsAtom } from 'atoms/pokemons'
import styled from 'styled-components'
import Text from 'components/Text'
import PokemonList from 'components/pokemon/List'

const ListPage = () => {
  const [pokemons, setPokemons] = useRecoilState(PokemonsAtom)
  const infiniteScrollTrigger = useRef<HTMLDivElement>(null)

  useObserver(infiniteScrollTrigger, () => {
    getPokemons(pokemons.length).then((pokemons) => {
      setPokemons((prev) => [...prev, ...pokemons])
    })
  })

  return (
    <>
      <Text type="title">포켓몬 도감</Text>
      <PokemonList pokemons={pokemons} />
      <Bottom ref={infiniteScrollTrigger} />
    </>
  )
}

export default ListPage

const Bottom = styled.div`
  width: 100%;
  height: 1rem;
`
