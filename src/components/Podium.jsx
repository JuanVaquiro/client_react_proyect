

const Podium = ({ name, text, icon, copa}) => {
  return (
    <div className="felx flex-col items-center mx-auto grid pt-6 gap-4 min-w-ma">
    <div className="rounded border-gray-300 border-2 h-20 shadow-md  shadow-gray-400 ">  
         <div className='flex space-x-4 p-2'>
           <img className='w-14' src={icon} alt="" />
         <div className='flex flex-col ml-2'>
            <span className="text-lg font-semibold">{name}</span>
            <span className="font-medium">{text}</span>
         </div>
         <div className='ml-16'>
            <img className='w-14' src={copa} alt="" />
         </div>
         </div>
      </div>      
    </div>
  );
}

export default Podium