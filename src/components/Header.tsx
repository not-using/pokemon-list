import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <HeaderWrapper>
      <HomeLink to="/">Home</HomeLink>
      <SearchBar />
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  padding: 0 10%;
  height: 3rem;
  background-color: #fff;
  border-bottom: 1px solid #000;
  display: flex;
  justify-content: space-between;
`

const HomeLink = styled(Link)`
  width: 4rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: bold;
`
