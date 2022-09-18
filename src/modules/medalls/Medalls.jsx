import { Fragment, useState } from 'react'
import TablaPlata from './Plata'
import TablaOro from './Oro'
import TablaBronce1 from './Bronce'
import TablaBronce2 from './Bronce2'
import TodasLasMedallas from './AllMedalls'

const Medalleria = () => {
  const [verTodas, setVerTodas] = useState(true)
  const [verOro, setVerOro] = useState(false)
  const [verPlata, setVerPlata] = useState(false)
  const [verBronce1, setVerBronce1] = useState(false)
  const [verBronce2, setVerBronce2] = useState(false)

  const MostrarOro = () => { 
    setVerOro(true)
    setVerPlata(false)
    setVerBronce1(false)
    setVerBronce2(false)
    setVerTodas(false)
  }
  const MostrarPlata = () => { 
    setVerPlata(true)
    setVerOro(false)
    setVerBronce1(false)
    setVerBronce2(false)
    setVerTodas(false)
  }
  const MostrarBreonce1 = () => { 
    setVerBronce1(true)
    setVerOro(false)
    setVerPlata(false)
    setVerBronce2(false)
    setVerTodas(false)
  }
  const MostrarBreonce2 = () => { 
    setVerBronce2(true)
    setVerOro(false)
    setVerPlata(false)
    setVerBronce1(false)
    setVerTodas(false)
  }

  const MostrarTodas = () => { 
    setVerTodas(true)
    setVerBronce2(false)
    setVerOro(false)
    setVerPlata(false)
    setVerBronce1(false)
  }

  return (
    <Fragment>
    <div className='flex flex-col justify-center items-center'>
      <div className="btn-group  mt-3" 
        role="group" aria-label="Basic outlined example">
        <button class="btn btn-outline-primary" onClick={() => MostrarTodas()}>MEDALLERIA</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarOro()}>ORO</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarPlata()}>PLATA</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarBreonce1()}>BRONCE 1</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarBreonce2()}>BRONCE 2</button>
        <button className="btn btn-primary">Descargar PDF</button>
      </div>
      
      {
        verOro ? (
          <TablaOro />
        ) : null
      }
     
      {
        verPlata ? (
          <TablaPlata />
        ) : null
      }
      {
        verBronce1 ? (
          <TablaBronce1 /> 
        ) : null
      }
      {
        verBronce2 ? (
          <TablaBronce2 />
        ) : null
      }
      {
        verTodas ? (
          <TodasLasMedallas />
        ) : null
      }
      </div>
    </Fragment>
  );
}

export default Medalleria
