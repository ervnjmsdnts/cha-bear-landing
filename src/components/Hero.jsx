import Link from 'next/link'
import React from 'react'

import Section from '@/components/Layout/Section'

const Hero = () => {
  return (
    <Section className='flex justify-center'>
      <div className='text-center'>
        <h1 className='font-bold text-7xl mb-8 text-black-dark'>HEADING</h1>
        <p className='md:w-[600px] w-[300px] text-black-light mb-12'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          commodi dolorem similique inventore laborum asperiores quibusdam minus
          vitae id veritatis saepe! Vero soluta sed ipsum velit fugiat porro
          quasi enim!
        </p>
        <Link href='https://cha-bear-inventory.vercel.app/' passHref>
          <button className='px-8 py-2 bg-yellow-light rounded-lg font-semibold shadow-md'>
            Start Now
          </button>
        </Link>
      </div>
    </Section>
  )
}

export default Hero
