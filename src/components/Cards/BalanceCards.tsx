import React from 'react'
import wepay from "../../assets/wepay.png"

const BalanceCards = () => {
  return (
  <div className='balanceBorder rounded-3xl w-full p-8'>
    <img src={wepay} alt='WePay' className='wePay'/>
    <div>
    <div className='flex flex-col items-start gap-0.5 left-4 top-2.5'>
    <h2 className='font-normal text-sm '>USD- United State Dollars</h2>
    <h1 className='font-bold text-base text-customPurple'>$10,000</h1>
 </div>
<div className='flex flex-row justify-between items-center pt-8'>
    <div className='rounded-full bg-blue-600 h-16 w-16'>
    </div>
    <div className=' '>
    <button className='bg-white  pt-1.5 pr-4 pb-1.5 p-4  rounded-3xl overflow-hidden mr-2.5' type='button' >
              <h1 className='text-sm font-normal'>Deposit</h1>
              
            </button> 
            <button className='bg-white  pt-1.5 pr-4 pb-1.5 p-4  rounded-3xl overflow-hidden ' type='button' >
              <h1 className='text-sm font-normal'>Transfer</h1>
              
            </button> 
    </div>
</div>
</div>
  </div>
  )
}

export default BalanceCards