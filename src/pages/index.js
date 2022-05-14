import Head from 'next/head'

import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cha-Bear</title>
        <link rel='shortcut icon' href='/logo.png' />
      </Head>
      <div className='w-full'>
        <Hero />
        <Slider />
        <Footer />
      </div>
    </>
  )
}
