import { Provider } from 'jotai'
import { Outlet, Scripts, ScrollRestoration } from 'react-router'
import type { PropsWithChildren } from 'react'

export function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="포켓몬 정보를 제공하는 사이트입니다"
        />
        <link rel="manifest" href="/manifest.json" />
        <title>포켓몬 도감</title>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return (
    <Provider>
      <Outlet />
    </Provider>
  )
}
