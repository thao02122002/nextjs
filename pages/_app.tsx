import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/Layout'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (<LayoutWrapper>
    
    <Component {...pageProps} />
      </LayoutWrapper>)
  
   
}

export default MyApp
