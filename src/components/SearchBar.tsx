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
      <Input
        type="number"
        onChange={(e) => setSearchedValue(e.currentTarget.value)}
        placeholder="포켓몬 번호를 입력해주세요"
      />
      <Button type="submit">검색</Button>
    </SearchBarWrapper>
  )
}

export default SearchBar

const SearchBarWrapper = styled.form`
  width: 16rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Input = styled.input`
  flex-grow: 1;
  padding: 0.1rem 0.4rem;
`
const Button = styled.button`
  padding: 0.1rem 0.4rem;
  margin-left: 0.5rem;
`
