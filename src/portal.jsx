import { Fragment } from "react";
import CartTornament from "./components/CartTornament";
import Footer from "./components/Footer";
import { CART_TITLE_NUM1 } from "./env.js";
import { CART_DATE_NUM1 } from "./env.js";
import { CART_SITE_NUM1 } from "./env.js";
import { CART_TITLE_NUM2 } from "./env.js";
import { CART_DATE_NUM2 } from "./env.js";
import { CART_SITE_NUM2 } from "./env.js";
import { CART_TITLE_NUM3 } from "./env.js";
import { CART_DATE_NUM3 } from "./env.js";
import { CART_SITE_NUM3 } from "./env.js";
import KARATE1 from './multimedia/encabezadoUno.png'
import KARATE2 from './multimedia/encabezadoDos.png'
import KARATE3 from './multimedia/encabezadoTres.png'

const Portal = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center m-3 p-2">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-gray-700 from-blue-700">
            TORNEOS
          </span>
          DE LA TEMPORADA
        </h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          . Lista de torneos en curso
        </p>
      </div>
      
      <div className="flex flex-col gap-4 items-center justify-center m-3 p-2 md:flex-row">
        <CartTornament
          proyecto={'1'}
          img={KARATE1}
          title={CART_TITLE_NUM1}
          date={CART_DATE_NUM1}
          site={CART_SITE_NUM1}
        />
        <CartTornament
          proyecto={'2'}
          img={KARATE2}
          title={CART_TITLE_NUM2}
          date={CART_DATE_NUM2}
          site={CART_SITE_NUM2}
        />
        <CartTornament
          proyecto={'3'}
          img={KARATE3}
          title={CART_TITLE_NUM3}
          date={CART_DATE_NUM3}
          site={CART_SITE_NUM3}
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Portal;
