import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  // It will enable the app to use page level layout if available
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
