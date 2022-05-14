import Image from 'next/image'
import React from 'react'
import { FaFacebookSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='w-full bg-yellow-light mt-32'>
      <div className='flex items-center mx-auto py-4 justify-between w-4/5'>
        <div className='flex flex-col justify-start'>
          <div className='flex items-center'>
            <div className='relative h-12 w-12'>
              <Image src='/logo.png' alt='logo' layout='fill' priority={true} />
            </div>
            <h2 className='pl-4 font-bold text-2xl text-black-dark'>
              Cha-Bear
            </h2>
          </div>
          <div className='flex items-center mt-4'>
            <FaFacebookSquare className='text-4xl text-brown-dark' />
            <h2 className='pl-4 text-lg text-black-light'>
              ChaBear - Balete, Batangas
            </h2>
          </div>
          <div className='flex items-center mt-4'>
            <RiInstagramFill className='text-4xl text-brown-dark' />
            <h2 className='pl-4 text-lg text-black-light'>chabear.balete</h2>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
