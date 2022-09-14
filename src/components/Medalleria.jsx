import { Fragment, useEffect, useState } from 'react'
import Constante from '../constante'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import MedalleriaPDF from '../renderPDF/medalleriaPDF'
import TablaPlata from './Plata'
import TablaOro from './Oro'
import TablaBronce1 from './Bronce'
import TablaBronce2 from './Bronce2'

const Medalleria = () => {
  const [verPDF, setVerPDF] = useState(false)
  const [verOro, setVerOro] = useState(true)
  const [verPlata, setVerPlata] = useState(false)
  const [verBronce1, setVerBronce1] = useState(false)
  const [verBronce2, setVerBronce2] = useState(false)

  const MostrarOro = () => { 
    setVerOro(true)
    setVerPlata(false)
    setVerBronce1(false)
    setVerBronce2(false)
  }
  const MostrarPlata = () => { 
    setVerPlata(true)
    setVerOro(false)
    setVerBronce1(false)
    setVerBronce2(false)
  }
  const MostrarBreonce1 = () => { 
    setVerBronce1(true)
    setVerOro(false)
    setVerPlata(false)
    setVerBronce2(false)
  }
  const MostrarBreonce2 = () => { 
    setVerBronce2(true)
    setVerOro(false)
    setVerPlata(false)
    setVerBronce1(false)
  }

  return (
    <Fragment>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <button class="btn btn-outline-primary" onClick={() => MostrarOro()}>ORO</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarPlata()}>PLATA</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarBreonce1()}>BRONCE 1</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarBreonce2()}>BRONCE 2</button>
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
    </Fragment>
  );
}

export default Medalleria
