import '../styles/globals.css'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return <>
  <Navbar></Navbar>
    <Component {...pageProps} />
<Footer></Footer> 
 </>

}

export default MyApp
