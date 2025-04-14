import {
  data,
  isRouteErrorResponse,
  Link,
  type ClientLoaderFunctionArgs,
} from 'react-router'
import { type Pokemon } from 'types/Pokemon'
import Text from 'components/Text'
import PokemonDetail from 'components/pokemon/Detail'
import PokemonEvolution from 'components/pokemon/Evolution'
import styled from 'styled-components'
import { getPokemonById } from 'api/getPokemonById'
import type { Route } from './+types/DetailPage'

export async function clientLoader({ params }: ClientLoaderFunctionArgs) {
  const id = Number(params.id)
  if (isNaN(id)) {
    throw data('포켓몬 정보를 찾을 수 없습니다', { status: 400 })
  }
  return getPokemonById(id)
}

const DetailPage = ({ loaderData }: Route.ComponentProps) => {
  const pokemon = loaderData as Pokemon

  return (
    <DetailWrapper>
      <Text type="title">{`#${pokemon.id} ${pokemon.name}`}</Text>
      <PokemonDetail pokemon={pokemon} />
      <PokemonEvolution
        evolutionChainId={pokemon.evolutionChainId}
        currentPokemonId={pokemon.speciesId}
      />
    </DetailWrapper>
  )
}

export default DetailPage

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  if (isRouteErrorResponse(error))
    return (
      <div>
        <h2>
          {error.status} {error.statusText}
        </h2>
        <p>{error.data}</p>
        <Link to="/">처음으로</Link>
      </div>
    )
  if (error instanceof Error) {
    return (
      <div>
        <h2>{error.name}</h2>
        <p>{error.message}</p>
        <Link to="/">처음으로</Link>
      </div>
    )
  }
  return (
    <div>
      <p>Unknown Error</p>
      <Link to="/">처음으로</Link>
    </div>
  )
}

const DetailWrapper = styled.article`
  width: 70%;
  margin: 0 auto;
  & > div {
    width: 30rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
  }
  & > div > * {
    flex-basis: 10rem;
  }
  & h3 {
    flex-basis: 5rem;
    font-size: 1.2rem;
  }
`
