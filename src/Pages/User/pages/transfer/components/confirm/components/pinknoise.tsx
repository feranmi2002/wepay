import React from 'react'

const pinknoise = () => {
  return (
    <div className='bgpink rounded-2xl w-full px-4 py-[11px] flex flex-col gap-6'>
      <div className="w-full flex flex-col text-left">
        <h1 className='text-grey text-sm font-normal'>USD-United State Dollars</h1>
        <h1 className='text-pink text-base font-semibold'>$2 000</h1>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flag w-6 h-6 rounded-full bg-pink"></div>
        <h1 className='text-xs text-pink font-normal'>1234567890</h1>
      </div>

    </div>
  )
}

export default pinknoise