import { NextPage } from 'next/'
import { AppProps } from 'next/app'
import GlobalStyle from '@/styles/global'
import Head from 'next/head'

const Holydays: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Holydays</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default Holydays
