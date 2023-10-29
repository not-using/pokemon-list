import { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState('')
  const navigate = useNavigate()

  const goToPokemonDetail: FormEventHandler = (e) => {
    e.preventDefault()
    navigate(`/${searchedValue}`)
  }
  
  return (
    <SearchBarWrapper onSubmit={goToPokemonDetail}>
      <input
        type="number"
        onChange={(e) => setSearchedValue(e.currentTarget.value)}
        placeholder="포켓몬 번호를 입력해주세요"
      />
      <button type="submit">검색</button>
    </SearchBarWrapper>
  )
}

export default SearchBar

const SearchBarWrapper = styled.form`
  width: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
