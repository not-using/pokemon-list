import { useState, type FormEventHandler } from 'react'
import { useNavigate } from 'react-router'

const SearchBar = () => {
  const [searchedValue, setSearchedValue] = useState('')
  const navigate = useNavigate()

  const goToPokemonDetail: FormEventHandler = (e) => {
    e.preventDefault()
    navigate(`/${searchedValue}`)
  }

  return (
    <form
      onSubmit={goToPokemonDetail}
      className="flex w-3xs items-center justify-center"
    >
      <input
        className="flex-grow px-1.5 py-0.5"
        type="number"
        onChange={(e) => setSearchedValue(e.currentTarget.value)}
        placeholder="포켓몬 번호를 입력해주세요"
      />
      <button className="px-1.5 py-0.5" type="submit">
        검색
      </button>
    </form>
  )
}

export default SearchBar
