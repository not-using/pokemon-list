import Text from 'components/Text'
import styled from 'styled-components'
import { Pokemon } from 'types/Pokemon'

type Props = {
  pokemon: Pokemon
}

const PokemonDetail = ({ pokemon }: Props) => {
  return (
    <div>
      <div>
        {pokemon.images.map((image) => (
          <Image key={image} src={image} alt={pokemon.name} loading="lazy" />
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

const Image = styled.img`
  width: 8rem;
  height: auto;
`
