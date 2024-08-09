
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '../dialog/modal';




const dropdowninput = ({text}) => {

  const [dialog , setDialog] = useState(false)
  const open = () => setDialog(true)
  const close = () => setDialog(false)
  return (
    <div className='relative '>
        <div onClick={open} className="w-6 h-6 bottom-4 cursor-pointer right-3 bg-purple rounded-full absolute flex justify-center items-center">
        <Icon className='text-white text-base' icon="mingcute:down-fill" />
        </div>
        <input type="text"
        placeholder={text} className='p-3 text-sm placeholder-grey borpeer w-full border-b-[0.5px] border-dark outline-none focus:border-purple text-light_dark hover:border-purple/30' />
      <Modal Open={dialog} Close={close}/>
    </div>
    
  )
}

export default dropdowninput