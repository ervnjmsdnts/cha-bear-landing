import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full  border-gray-light border-b'>
      <div className='flex items-center mx-auto py-4 justify-between w-4/5'>
        <div className='flex items-center'>
          <div className='relative h-12 w-12'>
            <Image src='/logo.png' alt='logo' layout='fill' priority={true} />
          </div>
          <h2 className='pl-4 font-bold text-2xl text-black-dark'>Cha-Bear</h2>
        </div>
        <Link href='https://cha-bear-inventory.vercel.app/' passHref>
          <button className='px-8 py-4 bg-yellow-dark font-bold text-black-dark rounded-lg hover:bg-yellow-dark-75 transition-all shadow-lg'>
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
