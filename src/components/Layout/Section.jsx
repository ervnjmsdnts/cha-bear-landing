import React from 'react'

const Section = ({ children, className = '' }) => {
  return (
    <section className='w-full'>
      <div className={`w-3/4 mx-auto mt-32 ${className}`}>{children}</div>
    </section>
  )
}

export default Section
