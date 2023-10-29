import Text from 'components/Text'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Pokemon } from 'types/Pokemon'

type Props = {
  pokemon: Pokemon
}
const Card = ({ pokemon }: Props) => {
  return (
    <CardWrapper>
      <CardLink to={`/${pokemon.id}`}>
        <Id type="subtitle">{`${pokemon.id}`}</Id>
        <Text>{pokemon.name}</Text>
        <img
          src={pokemon.images[pokemon.images.length - 1]} // 정면 이미지
          alt={pokemon.name}
          width={100}
          height={100}
          loading="lazy"
        />
      </CardLink>
    </CardWrapper>
  )
}

export default Card

const CardWrapper = styled.li`
  list-style: none;
  width: 20rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`
const CardLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`

const Id = styled(Text)`
  &:before {
    content: '#';
  }
`
