import React from 'react'

function input() {
  return (
    <div className='flex flex-col items-center justify-center gap-4 text-sm font-normal'>
            <label className='self-start  text[#464646] '>
                 Email
            </label>
            <input
              className='w-full hover:border-[#8B4B82]  focus:outline-none input-border-purple border-b-2'
               type="text"
               name="" 
               id="" 
               placeholder='Enter email'/>
        </div>
       
  )
}

export default input