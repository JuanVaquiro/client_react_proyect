import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import BtnBack from './components/BtnBack'
import Footer from './components/Footer'
import Karate1 from './components/logos/Karate1'
import Karate2 from './components/logos/Karate2'
import MainTitle from './components/MainTitle'
import Constante from './constante'
import { HAND_FIST } from './multimedia/SVG'
import { SORT_AMOUNT_UP } from './multimedia/SVG'
import { TROPHY } from './multimedia/SVG'
import { MEDALL } from './multimedia/SVG'

function App() {
  return (
    <Fragment>
      <main className="flex flex-col justify-center items-center  mb-6 ">
        <BtnBack  url='/' />
        <MainTitle className="font-extrabold text-center text-4xl p-3 mb-4 lg:text-4xl md:pt-9 lg:mb-5 bg-clip-text" />
        <div className="flex space-x-8 responsi-card">
          <Karate1 />
          <div className="w-4/5 ml-0 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
            <Link to="CombatesProximos">
              <div className="border-t-4 border-t-orange-400 rounded bg-gray-50 hover:bg-gray-100">
                <article className="shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {HAND_FIST}
                  <span className="font-semibold">Combates Próximos</span>
                </article>
              </div>
            </Link>
            <div className="rounded bg-gray-50 hover:bg-gray-100">
              <a href={`${Constante.RUTA_API}/piramides.php`}>
                <article className="border-t-4 border-t-sky-400  shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {SORT_AMOUNT_UP}
                  <span className="font-semibold">Pirámide</span>
                </article>
              </a>
            </div>
            <Link to="Medalleria">
              <div className="rounded bg-gray-50 hover:bg-gray-100">
                <article className="border-t-4 border-t-red-400 shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {MEDALL}
                  <span className="font-semibold">Medalleria</span>
                </article>
              </div>
            </Link>
            <Link to="PremiacionGeneral">
              <div className="rounded bg-gray-50 hover:bg-gray-100">
                <article className="border-t-4 border-yellow-400 shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  {TROPHY}
                  <span className="font-semibold">Premiación General</span>
                </article>
              </div>
            </Link>
          </div>
          <Karate2 />
        </div>
        <div className='flex flex-col mt-3'>
          <a href={`${Constante.RUTA_API}/pdfAnexo/anexo1.pdf `} target="_blank" className="pdfPoomsae m-2 text-sm underline underline-offset-4">
            anexo1.pdf
          </a>
          <a href={`${Constante.RUTA_API}/pdfAnexo/anexo2.pdf`} target="_blank" className="pdfPoomsae m-2 text-sm underline underline-offset-4">
            anexo2.pdf
          </a>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
