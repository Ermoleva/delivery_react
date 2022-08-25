import '../src/styles/globals.css'
import Footer from '../src/components/section/footer';
import Header from '../src/components/section/header';
import TagHead from '../src/components/tag-head.server';

function MyApp({ Component, pageProps }) {
  return <div>
    <TagHead/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
