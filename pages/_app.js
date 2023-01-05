import '../styles/style.css'
import Layout from '../components/layout'
import Head from 'next/head'
import contactjson from '../data/contact.json'
export default function MyApp({ Component, pageProps }) {
  return (
      <>
      <Head>
          <title>{contactjson.fullname} - Personal Portfolio</title>
          <meta charSet="UTF-8"/>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
  </>
          )
}

/*
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
*/

