import Text from "./components/text";
import { Icon } from '@iconify/react';
import Susccess from '../../../../../../assets/success.png'

const Success = () => {
  const Reload = () => {
    window.location.reload();
  }
  return (
      <div className="lg:w-[42.6%] w-full mt-10  z-10 absolute  left-1/2 transform -translate-x-1/2  shadow-lg bg-white px-6 py-4 rounded-lg">
        <img src= {Susccess} alt="" className="absolute left-1/2 transform -translate-x-1/2 top-[-32px]" />
        <div className="flex flex-col mt-2 text-center w-full">
          <h1 className="text-green font-semibold text-xl">Successful</h1>
          <h1 className="text-light_dark text-sm">To salami blessing</h1>
        </div>
        <div className="flex-col flex gap-4"> 
          <div className="py-6 w-full flex flex-col gap-4 border-b-[0.5px] border-grey mt-2">
            <Text text1={'Amount sent'} text2={'$2,000'} style={undefined} />
            <Text text1={'Amount Received'} text2={'$2,000'} style={undefined} />
            <Text text1={'Rate'} text2={'$2,000'} style={undefined} />
          </div>
          <div className="w-full flex flex-col gap-4">
            <Text text1={'Recipient Name'} text2={'$2,000'} style={undefined} />
            <Text text1={'Recipient Currency'} text2={'$2,000'} style={undefined} />
            <Text text1={'Recipient Wallet Address'} text2={'$2,000'} style={undefined} />
            <Text text1={'Transaction Reference'} text2={'$2,000'} style={undefined} />
            <Text text1={'Transaction Date'} text2={'$2,000'} style={undefined} />
            <Text text1={'Transaction Type'} text2={'$2,000'} style={'text-red'} />
          </div>
          <div className="flex items-center w-full">
          <div onClick={Reload} className="  flex w-full items-center text-sm justify-center gap-2 mt-2 text-purple hover:text-purple/50 cursor-pointer">
            <Icon icon='solar:card-transfer-bold' className="text-2xl" />
            New transfer
          </div>
          <div className="peer flex w-full items-center justify-center text-sm gap-2 mt-2 text-purple hover:text-purple/50 cursor-pointer">
            <Icon icon='material-symbols:download' className=" text-2xl" />
            Download
          </div>
          </div>
        </div>
      </div>
  );
}

export default Success;
