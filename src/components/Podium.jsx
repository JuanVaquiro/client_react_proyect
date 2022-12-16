
const Podium = ({ color, colorText, name, delation, text, icon, copa }) => {
    
  return (
    <div className="felx flex-col items-center mx-auto grid pt-6 gap-4">
    <div className={`rounded border-gray-300 border-2 h-24 shadow-md shadow-gray-400 `}>  
         <div className={`flex space-x-4 ${color} cart-medall md:p-2 `}>
           <img className='w-14' src={icon} alt="medalla" />
         <div className='flex flex-col ml-2'>
            <span className="text-xs md:text-lg font-semibold">{name}</span>
            <span className="text-xs md:text-sm font-medium">{delation}</span>
            <span id={colorText} className={`text-xs md:text-lg font-medium`}>{text}</span>
         </div>
         <div className='ml-16'>
            <img className='w-16' src={copa} alt="copa" />
         </div>
         </div>
      </div>      
    </div>
  );
}

export default Podium