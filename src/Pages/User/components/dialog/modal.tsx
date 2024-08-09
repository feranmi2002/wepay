import Purplenoise from "../../pages/transfer/components/confirm/components/purplenoise";

const modal = ({Open , Close}) => {
    if (!Open) return null;

  return (
    <div onClick={Close}  className='z-30  bg-dark/50 w-screen h-screen fixed inset-0 flex items-center justify-center '>
        
        <div onClick={Open} className="lg:w-[27.82%] md:w-[50%] sm:w-[80%] z-40 p-6 bg-white rounded-lg flex gap-4 flex-col">
            <h1 className='text-purple text-xl font-semibold text-center'>Choose currency</h1>
            <Purplenoise/>
            <Purplenoise/>
            <Purplenoise/>

        </div>
        
    </div>
  )
}

export default modal