import React from 'react'

import '../styles/globals.css'
import Category from '../components/Category'
import Search from '../components/Search'

function MyApp({ Component, pageProps }) {
  return <div className='container mx-auto'>
    <Category />
    <Search />
    <Component {...pageProps} />
  </div>
}

export default MyApp
