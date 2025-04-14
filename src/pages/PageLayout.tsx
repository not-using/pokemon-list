import { Outlet } from 'react-router'
import Header from 'components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto pt-20 text-center">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
