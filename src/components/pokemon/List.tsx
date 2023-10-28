import { Pokemon } from 'types/Pokemon'

type Props = {
  pokemons: Pokemon[]
}
const PokemonList = ({ pokemons }: Props) => {
  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>{pokemon.name}</li>
      ))}
    </ul>
  )
}

export default PokemonList
