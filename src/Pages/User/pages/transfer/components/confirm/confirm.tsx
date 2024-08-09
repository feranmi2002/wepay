
import { Icon } from '@iconify/react';
import Pinknoise from './components/pinknoise';
import Purplenoise from './components/purplenoise';
import Button from '../../../../../../components/filledbutton/buttonfill'

const confirm = ({onClick, handleClick}) => {
  return (
    <div className="lg:w-[36.15%] w-full bg-white rounded-lg shadow-lg p-6 flex flex-col lg:gap-8 gap-4">
      <div className="header w-full relative items-center">
      <Icon onClick={onClick} className='absolute text-xl left-0 top-1 hover:text-purple  cursor-pointer' icon="ep:back" />
      <h1 className='text-gd text-center font-semibold text-xl'>Review</h1>
      </div>
      
      <div className="h-full w-full flex flex-col gap-6 ">
        <div className="h-full  w-full flex flex-col gap-2">
        <div className="SENDER h-full w-full flex flex-col m-0 text-left">
          <h1 className='text-dark text-sm'>From</h1>
          <h1 className='text-purple text-sm'>Sender</h1>
          <Purplenoise/>
        </div>
        <div className="receiver h-full w-full flex m-0 flex-col text-right">
          <h1 className='text-dark text-sm'>To</h1>
          <h1 className='text-pink text-sm'>Receiver</h1>
        
        <Pinknoise/>

        </div>
        </div>
      
        <div className="flex flex-col gap-6">
        <div className="rate flex items-center justify-between">
        <h1 className='text-dark text-sm'>Rate</h1>
        <h1 className='text-grey text-sm'>1 USD = 1500 NGN</h1>
        </div>
        <Button type={"submit"} onClick={handleClick} text={'Transfer'}/>
        </div>
        
        
      </div>
    </div>
  )
}

export default confirm