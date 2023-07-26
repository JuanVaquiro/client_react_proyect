import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer'
import BtnBack from '../../components/BtnBack'
import Constante from '../../constante'
import GeneralAwardPDF from '../../renderPDF/GeneralAwardPDF'
import MainTitle from '../../components/MainTitle';
import TextGeneral from '../../components/TextGeneral';


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

  return (
    <Fragment>
      <BtnBack url="/" />
      <div className="flex flex-col items-center justify-center responsi-container_table">
        <h2 className="font-extrabold text-center text-4xl lg:text-4xl bg-clip-text">
          Premiación General
        </h2>
        <MainTitle />
        <div className="flex flex-col items-center p-3">
        <TextGeneral />
          <div className="flex gap-2 mt-3">
            <PDFDownloadLink
              document={<GeneralAwardPDF GeneralAward={general} />}
              fileName="PremiacionGeneral.pdf"
            >
              <button className="btn btn-primary">Descargar PDF</button>
            </PDFDownloadLink>
            <a href={`${Constante.RUTA_API}/reportePremiacionGeneral.php`}>
              <button className='btn btn-success'>
                Descargar Excel
              </button>
            </a>
          </div>
        </div>
        <table id="TableXLSX" className="tabla text-center w-9/12 text-xl">
          <thead>
            <tr>
              <th>PUESTO</th>
              <th>DELEGACION</th>
            {/*   <th>TOTAL</th>
  <th>PUNTOS MEDALLAS</th> */}
              <th>ORO</th>
              <th>PLATA</th>
              <th>BRONCE</th>
            </tr>
          </thead>
          <tbody className="cursor-pointer">
            {general.map((data, index) => (
              <tr key={data.cod_del}>
                <td>{index + 1}</td>
                <td
                  onClick={() =>
                    navigate(`/PremiacionGeneral/${data.DELEGACION}`)
                  }
                >
                  {data.DELEGACION}
                </td>
         {/*        <td
                  onClick={() =>
                    navigate(`/PremiacionGeneral/${data.DELEGACION}`)
                  }
                >
                  {data.PUNTOS_GENERAL}
                </td> 
                <td
                  onClick={() =>
                    navigate(`/PremiacionGeneral/${data.DELEGACION}`)
                  }
                >
                  {data.PUNTUACION_MEDALLAS}
                </td>
              */}
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