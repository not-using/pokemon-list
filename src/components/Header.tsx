import { Link } from 'react-router'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className="fixed flex h-15 w-full items-center justify-between border-b border-black bg-white px-10">
      <Link to="/" className="text-xl font-bold text-black">
        Home
      </Link>
      <SearchBar />
    </header>
  )
}

export default Header
