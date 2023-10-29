import { Pokemon } from 'types/Pokemon'
import Text from 'components/Text'

type Props = {
  pokemon: Pokemon
}

const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <div>
      <div>
        {pokemon.images.map((image) => (
          <img
            key={image}
            src={image}
            alt={pokemon.name}
            width={100}
            height={100}
            loading="lazy"
          />
        ))}
      </div>
      <Text>{pokemon.genus}</Text>
      <Text type="subtitle">타입</Text>
      {pokemon.types.map((type) => (
        <Text key={type}>{type}</Text>
      ))}
      <Text type="subtitle">키</Text>
      <Text>{`${pokemon.height}`}</Text>
      <Text type="subtitle">몸무게</Text>
      <Text>{`${pokemon.weight}`}</Text>
    </div>
  )
}

export default PokemonDetail
