import React from 'react'
import './buttonfill.css'

const buttonfill = ({text, type, onClick}) => {
  return (
      <button onClick={onClick} type={type} className='button-fill w-full text-center p-2 cursor-pointer'><h1 className=' text-sm'>{text}</h1></button>
  )
}

export default buttonfill