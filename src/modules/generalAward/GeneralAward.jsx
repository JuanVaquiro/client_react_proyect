import { Fragment, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer'
import BtnBack from '../../components/BtnBack'
import Constante from '../../constante'
import GeneralAwardPDF from '../../renderPDF/GeneralAwardPDF'
import BtnExport from '../../renderExcel/BtnExportExcel'
import MainTitle from '../../components/MainTitle';

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
          Premiacion General
        </h2>
        <MainTitle />
        <div className="flex flex-col items-center p-3">
          <span className="font-medium">
            ☑ Para que la medalla sea puntuable, deben haber mínimo 3
            deportistas de 3 delegaciones diferentes
          </span>
          <span className="font-medium">
            ☑ La general se calcula por la mayor cantidad de medallas de oro,
            plata y bronce en su respectivo orden.
          </span>
          <div className="flex gap-2 mt-3">
            <PDFDownloadLink
              document={<GeneralAwardPDF GeneralAward={general} />}
              fileName="PremiacionGeneral.pdf"
            >
              <button className="btn btn-primary">Descargar PDF</button>
            </PDFDownloadLink>
            <BtnExport params="TableXLSX" title="PremiacionGeneral" />
          </div>
        </div>
        <table id="TableXLSX" className="tabla text-center w-9/12 text-xl">
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
          <tbody className="cursor-pointer">
            {general.map((data) => (
              <tr key={data.cod_del}>
                <td>{data.cod_del}</td>
                <td
                  onClick={() =>
                    navigate(`/PremiacionGeneral/${data.DELEGACION}`)
                  }
                >
                  {data.DELEGACION}
                </td>
                <td
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