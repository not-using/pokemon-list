import Text from 'components/Text'
import { memo } from 'react'
import { Link } from 'react-router'
import { type Pokemon } from 'types/Pokemon'

type Props = {
  pokemon: Pokemon
}
const Card = ({ pokemon }: Props) => {
  return (
    <li className="w-80 rounded-lg border-2 border-black">
      <Link
        to={`/${pokemon.id}`}
        className="flex h-40 cursor-pointer flex-col items-center justify-center"
      >
        <Text
          type="subtitle"
          className="before:content-['#']"
        >{`${pokemon.id}`}</Text>
        <Text>{pokemon.name}</Text>
        <img
          src={pokemon.images[pokemon.images.length - 1]} // 정면 이미지
          alt={pokemon.name}
          width={100}
          height={100}
          loading="lazy"
        />
      </Link>
    </li>
  )
}

export default memo(Card)
