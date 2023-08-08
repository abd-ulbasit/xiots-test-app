import MainNavbar from '@/components/MainNavbar'
import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps, AppType } from 'next/app'
import { ReactElement, ReactNode } from 'react'
export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}

const MyApp: AppType<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout: (page: ReactElement) => ReactNode = (Component as NextPageWithLayout).getLayout ?? ((page) => page);

  return <>
    <MainNavbar ></MainNavbar>
    <div className='' >
      {getLayout(<Component {...pageProps} />)}
    </div>
  </>
}
export default MyApp