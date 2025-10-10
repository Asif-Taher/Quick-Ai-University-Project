import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className='text-center my-8 max-w-2xl mx-auto'>
      <h2 className='text-[42px]'>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default Title
