import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { ShoppingCartProvider } from '@/lib/context/shopping-cart'
export default function App({ Component, pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ShoppingCartProvider>

        <Component {...pageProps} />
      </ShoppingCartProvider>
    </SessionProvider>
  )
}
