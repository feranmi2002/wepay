interface CustomInlineButtonProps{
    label:String;
}

const CustomInlineButton : React.FC<CustomInlineButtonProps> = ({
    label}) => {
  return (
        <div>
            <button className='bg-gradient-to-r from-purple to-pink w-full h-32px p-2.5  border-3.4  rounded-3xl overflow-hidden ' type='button' >
              <h1 className='tm text-sm font-normal text-white'>{label}</h1>        
            </button> 
        </div>
  )
}

export default CustomInlineButton;