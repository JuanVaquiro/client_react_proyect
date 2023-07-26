import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from './src/components/Footer'
import Karate1 from './src/components/logos/Karate1'
import Karate2 from './src/components/logos/Karate2'
import MainTitle from './src/components/MainTitle'
import Constante from './src/constante'
import { CART_ITEM_1 } from './src/env'
import { CART_ITEM_2 } from './src/env'
import { CART_ITEM_3 } from './src/env'
import { CART_ITEM_4 } from './src/env'
import { ANCOR_1 } from './src/env'
import { ANCOR_2 } from './src/env'
import { HAND_FIST } from './src/multimedia/SVG'
import { SORT_AMOUNT_UP } from './src/multimedia/SVG'
import { TROPHY } from './src/multimedia/SVG'
import { MEDALL } from './src/multimedia/SVG'


function App() {
  return (
    <Fragment>
      <main className="flex flex-col justify-center items-center  mb-6 ">
        <MainTitle className="font-extrabold text-center text-4xl p-3 mb-4 lg:text-4xl md:pt-9 lg:mb-5 bg-clip-text" />
        <div className="flex space-x-8 responsi-card">
          <Karate1 />
          <div className="w-4/5 ml-0 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <Link to="CombatesProximos">
              <div className="border-t-4 border-t-orange-400 rounded bg-gray-50 hover:bg-gray-100">
                <article className="shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {HAND_FIST}
                  <span className="font-semibold">{CART_ITEM_1}</span>
                </article>
              </div>
            </Link>
            <div className="rounded bg-gray-50 hover:bg-gray-100">
              <a href={`${Constante.RUTA_API}/piramides.php`}>
                <article className="border-t-4 border-t-sky-400  shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {SORT_AMOUNT_UP}
                  <span className="font-semibold">{CART_ITEM_2}</span>
                </article>
              </a>
            </div>
            <Link to="Medalleria">
              <div className="rounded bg-gray-50 hover:bg-gray-100">
                <article className="border-t-4 border-t-red-400 shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {MEDALL}
                  <span className="font-semibold">{CART_ITEM_3}</span>
                </article>
              </div>
            </Link>
            <Link to="PremiacionGeneral">
              <div className="rounded bg-gray-50 hover:bg-gray-100">
                <article className="border-t-4 border-yellow-400 shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {TROPHY}
                  <span className="font-semibold">{CART_ITEM_4}</span>
                </article>
              </div>
            </Link>
          </div>
          <Karate2 />
        </div>
        <div className='flex flex-col mt-3'>
          <a 
            id="CACHE-ANCOR1"
            href={`${Constante.RUTA_API}/pdfAnexo/anexo1.pdf`} 
            target="_blank" 
            className="pdfPoomsae m-2 text-sm underline underline-offset-4"
            >
              {ANCOR_1}
          </a>
          <a  
           id='CACHE-ANCOR2' 
           href={`${Constante.RUTA_API}/pdfAnexo/anexo2.pdf`} 
           target="_blank" 
           className="pdfPoomsae m-2 text-sm underline underline-offset-4"
           >
              {ANCOR_2}
          </a>
        </div> 
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
