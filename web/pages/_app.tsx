import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MetaMaskProvider } from 'metamask-react'
import Layout from '../components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <MetaMaskProvider>
        <Layout {...pageProps} />
      </MetaMaskProvider>
      {/* <Component {...pageProps} /> */}
    </div>
  )
}
