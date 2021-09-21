import {AppProps} from 'next/app';
import React from 'react';
import {DefaultLayout} from '../layouts/DefaultLayout'

export const App: React.FC<AppProps> = ({
    Component: PageComponent,
    pageProps,
}) => {
    return (
        <DefaultLayout>
            <PageComponent {...pageProps} />
        </DefaultLayout>
    );
};

export default App;