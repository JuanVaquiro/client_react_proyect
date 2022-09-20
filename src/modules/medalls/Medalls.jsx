import { Fragment, useState } from 'react'
import TableGold from './table/Gold'
import TableSilver from './table/Silver'
import TableBronze from './table/Bronze'
import TableBronze2 from './table/Bronze2'
import AllMedalls from './table/AllMedalls'
import { Link } from "react-router-dom";

const Medalls = () => {
  const [verOro, setVerOro] = useState(true)
  const [verPlata, setVerPlata] = useState(false)
  const [verBronce1, setVerBronce1] = useState(false)
  const [verBronce2, setVerBronce2] = useState(false)
  const [verTodas, setVerTodas] = useState(false)
  
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
    <Link to="/">
      <i class="fas fa-long-arrow-left ml-44 mt-6 text-3xl icon-back-rpns"/> 
    </Link>
    <div className='flex flex-col justify-center items-center responsi-btns'>
      <div className="btn-group" 
        role="group" aria-label="Basic outlined example">
        <button class="btn btn-outline-primary" onClick={() => MostrarOro()}>ORO</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarPlata()}>PLATA</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarBreonce1()}>BRONCE 1</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarBreonce2()}>BRONCE 2</button>
        <button class="btn btn-outline-primary" onClick={() => MostrarTodas()}>MEDALLERIA</button>
       {/*  <PDFDownloadLink
          document={<AllMedallsPDF />}
          fileName="Medalleria.pdf"
        >
          <button className="btn btn-primary">Descargar PDF</button>
        </PDFDownloadLink> */}
      </div>
      </div>
      
      {
        verOro ? (
         <TableGold />
        ) : null
      }
     
      {
        verPlata ? (
         <TableSilver />
        ) : null
      }
      {
        verBronce1 ? (
          <TableBronze />
        ) : null
      }
      {
        verBronce2 ? (
          <TableBronze2 />
        ) : null
      }
      {
        verTodas ? (
            <AllMedalls />
        ) : null
      }
    </Fragment>
  );
}

export default Medalls
