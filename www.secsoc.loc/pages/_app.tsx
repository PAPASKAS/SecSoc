import type { AppProps } from 'next/app';
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "../components/layouts/MainLayout";
import Head from "next/head";
import { Provider } from 'react-redux';
import {setupStore} from "../lib/store/store";


const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>SecSoc</title>
            </Head>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    );
};
