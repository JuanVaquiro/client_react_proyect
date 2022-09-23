import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import BtnBack from '../../components/BtnBack';
import Constante from '../../constante';

const GeneralAward = () => {
  const [general, setGeneral] = useState([])
  const navigate = useNavigate();

  const GetGeneralAward = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtenerPuntajeGeneral.php`);
    const data = await resp.json();
    setGeneral(data);
  }

  useEffect(() => {
    GetGeneralAward()
  }, [])
  5
  return (
    <Fragment>
      <BtnBack  url='/'/>
      <div className="flex flex-col items-center justify-center responsi-container_table">
        <h2 className="text-3xl font-black m-3 text-center">
          PREMIACION GENERAL Campeonato Ranking G1 Feria de las Flores 2022
        </h2>
        <div className='flex flex-col p-3 m-2'>
          <span className='font-medium'>
            ☑ Para que la medalla sea puntuable, deben haber mínimo 3 deportistas
            de 3 delegaciones diferentes
          </span>
          <span className='font-medium'>
            ☑ La general se calcula por la mayor cantidad de medallas de oro,
            plata y bronce en su respectivo orden.
          </span>
        </div>
        <table className="tabla text-center w-9/12 text-xl">
          <thead>
            <tr>
              <th>#</th>
              <th>DELEGACION</th>
              <th>TOTAL</th>
              <th>PUNTOS MEDALLAS</th>
              <th>ORO</th>
              <th>PLATA</th>
              <th>BRONCE</th>
            </tr>
          </thead>
          <tbody>
            {general.map((data) => (
              <tr className="" key={data.cod_del}>
                <td>{data.cod_del}</td>
                <td onClick={() => navigate(`/PremiacionGeneral/${data.DELEGACION}`)}>{data.DELEGACION}</td>
                <td>{data.PUNTOS_GENERAL}</td>
                <td>{data.PUNTUACION_MEDALLAS}</td>
                <td className="bg-yellow-300">{data.ORO}</td>
                <td className="bg-slate-300">{data.PLATA}</td>
                <td className="bg-orange-300">{data.BRONCE}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default GeneralAward