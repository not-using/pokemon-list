import styled from 'styled-components'

type Props = {
  type?: 'title' | 'subtitle' | 'normal'
  children: string
  className?: string
}

const Text = ({ type = 'normal', children, className }: Props) => {
  switch (type) {
    case 'title':
      return <Title className={className}>{children}</Title>
    case 'subtitle':
      return <SubTitle className={className}>{children}</SubTitle>
    case 'normal':
      return <NormalText className={className}>{children}</NormalText>
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
