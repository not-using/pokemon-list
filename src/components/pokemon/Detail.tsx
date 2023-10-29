import { Pokemon } from 'types/Pokemon'
import Text from 'components/Text'

type Props = {
  pokemon: Pokemon
}

const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <>
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
      <div>
        <Text type="subtitle">종류</Text>
        <Text>{pokemon.genus}</Text>
      </div>
      <div>
        <Text type="subtitle">타입</Text>
        <div>
          {pokemon.types.map((type) => (
            <Text key={type}>{type}</Text>
          ))}
        </div>
      </div>
      <div>
        <Text type="subtitle">키</Text>
        <Text>{`${pokemon.height}`}</Text>
      </div>
      <div>
        <Text type="subtitle">몸무게</Text>
        <Text>{`${pokemon.weight}`}</Text>
      </div>
    </>
  )
}

export default PokemonDetail
