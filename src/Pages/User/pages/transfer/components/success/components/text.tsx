import React from 'react'

const text = ({text1, text2 , style}) => {
  return (
    <div className='flex items-center justify-between w-full'>
        <h1 className='text-light_dark text-sm'>{text1} </h1>
        <h1 className={`text-grey2 ${style}  text-sm`}>{text2} </h1>
    </div>
  )
}

export default text