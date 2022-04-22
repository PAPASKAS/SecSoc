import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'noty/src/noty.scss'
import 'noty/src/themes/nest.scss'
import MainLayout from '@/components/Layouts/MainLayout'
import Head from "next/head"
import {SSRProvider} from "react-bootstrap";
import Axios from "axios";
import * as https from "https";
import {Provider} from "react-redux";
import store from "@/store/store"


Axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
})


export default ({ Component, pageProps }: AppProps) => {
    return (
        <SSRProvider>
            <Provider store={store}>
                <Head>
                    <title>SecSoc</title>
                </Head>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </Provider>
        </SSRProvider>
    )
}
