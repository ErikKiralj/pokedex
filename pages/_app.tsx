import { QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

import { CustomHead } from '../src/shared-components'

import '../styles/globals.css'
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <CustomHead />
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}
