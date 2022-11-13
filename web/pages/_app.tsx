import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MetaMaskProvider } from 'metamask-react'
import { AccountProvider } from '../context/AccountProvider'
import Navbar from '../components/navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
      <AccountProvider>
        
        <Navbar />
        <Component {...pageProps} />

      </AccountProvider>
    </MetaMaskProvider>
  )
}
