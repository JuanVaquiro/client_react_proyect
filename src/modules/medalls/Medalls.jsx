import { Fragment, useState } from 'react'
import TableGold from './table/Gold'
import TableSilver from './table/Silver'
import TableBronze from './table/Bronze'
import TableBronze2 from './table/Bronze2'
import AllMedalls from './table/AllMedalls'
import BtnBack from '../../components/BtnBack';
import MainTitle from '../../components/MainTitle'

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
      <BtnBack url='/' />
      <div className="flex flex-col justify-center items-center responsi-btns">
        <MainTitle />

        <div
          className="btn-group"
          role="group"
          aria-label="Basic outlined example"
        >
          <button className="btn btn-outline-primary" onClick={() => MostrarOro()}>ORO</button>
          <button className="btn btn-outline-primary" onClick={() => MostrarPlata()}>PLATA</button>
          <button className="btn btn-outline-primary" onClick={() => MostrarBreonce1()}>BRONCE 1</button>
          <button className="btn btn-outline-primary" onClick={() => MostrarBreonce2()}>BRONCE 2</button>
          <button className="btn btn-outline-primary" onClick={() => MostrarTodas()}>MEDALLERIA</button>
        </div>
      </div>
      { verOro ? <TableGold /> : null }
      { verPlata ? <TableSilver /> : null }
      { verBronce1 ? <TableBronze /> : null }
      { verBronce2 ? <TableBronze2 /> : null }
      { verTodas ? <AllMedalls /> : null }
    </Fragment>
  );
}

export default Medalls
