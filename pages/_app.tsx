import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Web3ModalProvider from '../contexts/Web3ModalProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ModalProvider>
        <Component {...pageProps} />
      </Web3ModalProvider>
      
    </>
  )
  
  
}

export default MyApp
