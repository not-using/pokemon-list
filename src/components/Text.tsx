import styled from 'styled-components'

type Props = {
  type?: 'title' | 'subtitle' | 'normal'
  children: string
}

const Text = ({ type = 'normal', children }: Props) => {
  switch (type) {
    case 'title':
      return <Title>{children}</Title>
    case 'subtitle':
      return <SubTitle>{children}</SubTitle>
    case 'normal':
      return <NormalText>{children}</NormalText>
  }
}

export default Text

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`

const SubTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`

const NormalText = styled.p`
  font-size: 1rem;
  font-weight: 400;
`
