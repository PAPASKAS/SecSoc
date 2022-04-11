import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'noty/src/noty.scss'
import 'noty/src/themes/nest.scss'
import MainLayout from '@/components/Layouts/MainLayout'
import Head from "next/head"


const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>SecSoc</title>
            </Head>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}

export default App
