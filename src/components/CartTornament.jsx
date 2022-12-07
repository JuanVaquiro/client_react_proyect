import { CALENDER_ALT } from "../multimedia/SVG"
import { MAP_MARKET } from "../multimedia/SVG"

const CartTornament = ({ title, date, site, img }) => {
  return (
    <div className="max-w-xs rounded-lg shadow-md bg-gray-50 border border-gray-300 ">
      <a href='#' className="flex justify-center">
        <img
          className="rounded-t-lg p-2 m-2"
          src={ img }
          alt=""
        />
      </a>
      <div className="pb-3 px-4">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
              { title }
          </h5>
        </a>
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