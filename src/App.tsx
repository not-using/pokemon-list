import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import ListPage from 'pages/ListPage'
import DetailPage from 'pages/DetailPage'
import NotFoundPage from 'pages/NotFoundPage'
import ErrorPage from 'pages/ErrorPage'
import './global.css'

function App() {
  const routes = createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<ListPage />} />
      <Route
        path="/:id"
        element={<DetailPage />}
        errorElement={<NotFoundPage />}
      />
    </Route>,
  )

  return <RouterProvider router={createBrowserRouter(routes)} />
}

export default App
