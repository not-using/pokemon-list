import { lazy } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { getPokemonById } from 'api/getPokemonById'
import './global.css'
const Layout = lazy(() => import('pages/PageLayout'))
const DetailPage = lazy(() => import('pages/DetailPage'))
const NotFoundPage = lazy(() => import('pages/NotFoundPage'))
const ErrorPage = lazy(() => import('pages/ErrorPage'))
const ListPage = lazy(() => import('pages/ListPage'))

function App() {
  const routes = createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<ListPage />} />
      <Route
        path="/:id"
        loader={async ({ params }) => getPokemonById(Number(params.id))}
        element={<DetailPage />}
        errorElement={<NotFoundPage />}
      />
    </Route>,
  )

  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App
