import { Pokemon } from 'types/Pokemon'
import Card from './Card'
import styled from 'styled-components'

type Props = {
  pokemons: Pokemon[]
}
const PokemonList = ({ pokemons }: Props) => {
  return (
    <ListWrapper>
      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.id} />
      ))}
    </ListWrapper>
  )
}

export default PokemonList

const ListWrapper = styled.ol`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  margin: 4rem auto;
  gap: 1rem;
`
