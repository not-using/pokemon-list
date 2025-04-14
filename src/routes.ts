import { type RouteConfig, route, layout } from '@react-router/dev/routes'

export default [
  layout('pages/PageLayout.tsx', [
    route('/', 'pages/ListPage.tsx'),
    route('/:id', './pages/DetailPage.tsx'),
    route('*?', './pages/NotFoundPage.tsx'),
  ]),
] satisfies RouteConfig
