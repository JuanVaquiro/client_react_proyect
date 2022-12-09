import { CALENDER_ALT } from "../multimedia/SVG"
import { MAP_MARKET } from "../multimedia/SVG"
import { Link } from "react-router-dom"


const CartTornament = ({ title, date, site, img, proyecto }) => {
  return (
    <div className="max-w-xs rounded-lg shadow-md bg-gray-50 border border-gray-300 ">
      <Link to={`proyecto${proyecto}`} className="flex justify-center">
        <img
          src={ img }
          alt="Torneo"
        />
      </Link>
      <div className="pb-3 px-4">
        <Link to={`proyecto${proyecto}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
              { title }
          </h5>
        </Link>
        <p className="mb-1 font-normal flex gap-2">
        {CALENDER_ALT}
         <span className='text-gray-700'>
            { date } 
        </span>
        </p>
         <p className="mb-1 font-normal flex gap-2">
          {MAP_MARKET}
         <span className='text-gray-700'>
            { site }
         </span>
        </p>
      </div>
    </div>
  )
}

export default CartTornament