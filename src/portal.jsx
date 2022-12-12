import { Fragment } from "react";
import CartTornament from "./components/CartTornament";
import Footer from "./components/Footer";

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
        
        />
        <CartTornament
         
        />
        <CartTornament
          
        />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Portal;
