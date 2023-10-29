import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from 'components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  )
}

export default Layout

const Main = styled.main`
  padding-top: 5rem;
  text-align: center;
  margin: 0 auto;
`
