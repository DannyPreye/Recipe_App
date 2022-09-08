import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { GiKnifeFork } from 'react-icons/gi'

import '../styles/globals.css'
import Category from '../components/Category'
import Search from '../components/Search'

import { AnimatePresence } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  return <AnimatePresence existBeforeEnter >

    <div className='container mx-auto px-[2rem] lg:px-0'>
      <Head>
        <title>Danny Recipe</title>
        <meta name='description' content='A food recipe website' />
        <meta name='author' content='olawoyin Daniel' />
        <meta />
      </Head>
      <Link href="/"><a className='text-[1.5rem] font-[200]  font-mono flex items-center gap-2'><span><GiKnifeFork /></span><span className='bg-clip-text text-transparent bg-gradient-to-r from-[#f27121] to-[#e94057]'>DannyRecipe</span></a></Link>
      <Category />
      <Search />
      <Component {...pageProps} />
    </div>
  </AnimatePresence>
}

export default MyApp
