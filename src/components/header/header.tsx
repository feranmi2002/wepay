import { Icon } from '@iconify/react';

const header = ({text, header}) => {
  return (
    <div className='flex items-center justify-between z-10'>
        <h1 className='text-xl text-light_dark font-semibold'>{header}</h1>
        <div className="profile flex gap-6 items-center">
        <div className='w-full py-2 px-4 bg-gd text-white text-xs hover bg-white rounded-3xl'>{text}</div>
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple"></div>
            <Icon className='text-light_dark text-xl' icon="mingcute:down-fill" />

        </div>
        </div>
    </div>
  )
}

export default header