import { Provider } from 'react-redux';
import { store } from '../store';
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
