import Text from 'components/Text'
import { Link } from 'react-router-dom'
import { Pokemon } from 'types/Pokemon'

type Props = {
  pokemon: Pokemon
}
const Card = ({ pokemon }: Props) => {
  return (
    <Link to={`/detail/${pokemon.id}`}>
      <Text>{`#${pokemon.id}`}</Text>
      <Text>{pokemon.name}</Text>
    </Link>
  )
}

export default Card
