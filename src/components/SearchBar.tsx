import { FormEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Text from './Text'

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const goToPokemonDetail: FormEventHandler = (e) => {
    e.preventDefault()
    if (isNaN(Number(searchedValue))) {
      setErrorMessage('숫자만 입력해주세요')
      return
    }
    navigate(`/${searchedValue}`)
    setErrorMessage('')
  }
  
  return (
    <SearchBarWrapper onSubmit={goToPokemonDetail}>
      <input
        type="text"
        onChange={(e) => setSearchedValue(e.currentTarget.value)}
        placeholder="포켓몬 번호를 입력해주세요"
      />
      <button type="submit">검색</button>
      <Text>{errorMessage}</Text>
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
