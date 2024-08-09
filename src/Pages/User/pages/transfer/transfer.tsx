

import { useState } from 'react';
import Header from '../../../../components/header/header';
import Sendmoney from './components/sendmoney/sendmoney';
import Confirm from './components/confirm/confirm';
import Success from './components/success/success';
import Confetti from 'react-confetti';
import { useFormContext } from './context';


function transfer() {
  const {page, nextStep, previousStep} = useFormContext();

    const pages = () => {
    switch (page) {
      case 0:
        return <Sendmoney onClick={nextStep} />;
        case 1:
          return <Confirm handleClick={nextStep} onClick={previousStep} />;
          case 2:
            return  (
              
                <Success/>
              
             )
        default:
          return null;
    }
  }
  return (
    <div className='lg:w-[80vw] w-screen bg-white_smoke h-full lg:p-6 p-4 '>
     {page === 2 && (
        <Confetti
          colors={['#9a1a87', '#e423c8', '#00a725', '#ff0033']}
        />
      )}
      <div className="w-full h-full  flex flex-col gap-2 ">
            <Header text={"Premium"} header={"Transfer"}/>
            <div className="h-full w-full flex flex-col lg:justify-center relative lg:items-center lg:mt-0 mt-4 ">
              {pages()}
            </div>

        </div>
    </div>
  )
}

export default transfer