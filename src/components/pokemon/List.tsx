import { type Pokemon } from 'types/Pokemon'
import Card from './Card'

type Props = {
  pokemons: Pokemon[]
}
const PokemonList = ({ pokemons }: Props) => {
  return (
    <ol className="mx-auto mt-16 flex w-11/12 flex-wrap justify-center gap-4">
      {pokemons.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.id} />
      ))}
    </ol>
  )
}

export default PokemonList
