import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Footer from './components/Footer'
import Karate1 from './components/logos/Karate1'
import Karate2 from './components/logos/Karate2'
import MainTitle from './components/MainTitle'
import Constante from './constante'

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
                  <i className="fa-solid fa-hand-fist text-orange-300  p-2 text-4xl"></i>
                  <span className="font-semibold">Combates Próximos</span>
                </article>
              </div>
            </Link>
            <div className="rounded bg-gray-50 hover:bg-gray-100">
              <a href={`${Constante.RUTA_API}piramides.php`}>
                <article className="border-t-4 border-t-sky-400  shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  <i className="fa-solid fa-arrow-up-short-wide text-sky-400 text-4xl"></i>
                  <span className="font-semibold">Pirámide</span>
                </article>
              </a>
            </div>
            <Link to="Medalleria">
              <div className="rounded bg-gray-50 hover:bg-gray-100">
                <article className="border-t-4 border-t-red-400 shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  <i className="text-4xl">🥇</i>
                  <span className="font-semibold">Medalleria</span>
                </article>
              </div>
            </Link>
            <Link to="PremiacionGeneral">
              <div className="rounded bg-gray-50 hover:bg-gray-100">
                <article className="border-t-4 border-yellow-400 shadow-md flex flex-col gap-2 items-center justify-center h-full p-6">
                  <i className="fa-solid fa-trophy text-yellow-400 text-4xl "></i>
                  <span className="font-semibold">Premiación General</span>
                </article>
              </div>
            </Link>
          </div>
          <Karate2 />
        </div>
        <span className="mt-8 text-sm underline underline-offset-4">
          Ver Resultados Poomsae y Freestyle
        </span>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
