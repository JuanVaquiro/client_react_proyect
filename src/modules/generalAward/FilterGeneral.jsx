import { Fragment, useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';
import useFecthcMedalls from '../../hooks/useFecthMedalls';
import BtnBack from '../../components/BtnBack';
import Spinner from '../../components/Loanding'
import MainTitle from '../../components/MainTitle'
import Constante from '../../constante';
import FilterGeneralPDF from '../../renderPDF/FilterGeneralPDF';

const FilterGeneral = () => {
    const { gold, silver, bronze, bronze2 } = useFecthcMedalls()
    const [loading, setLoading] = useState(true)
    const { delation } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
      setTimeout(() => {  
        setLoading(false)
      },1800)
    },[]);
  
    const getAllMedalls = gold.map(item=> {
      const getSilver = silver.find(element=> element.COD === item.COD) ?? {}
      const getBronze = bronze.find(element=> element.COD === item.COD) ?? {}
      const getBronze2 = bronze2.find(element=> element.COD === item.COD) ?? {}
      return {
        ...item,
        silver: getSilver?.Plata ?? "",
        delation_silver: getSilver?.delacion_plata ?? "",
        bronze: getBronze?.Bronce1 ??"",
        delation_bronze: getBronze?.delacion_bronce1 ??"",
        bronze2: getBronze2?.Bronce2 ??"",
        delation_bronze2: getBronze2?.delacion_bronce2 ??""
      }
    })

    const FilterDelegation = getAllMedalls.filter( (item) => (
        item.delacion_oro === delation ||
        item.delation_silver  === delation || 
        item.delation_bronze ===  delation || 
        item.delation_bronze2 === delation 
    )) 

    const loader = () => { return ( <Spinner /> ) }
  
    if(loading){
      return(loader())
    }
    else {
      return (
        <Fragment>
          <BtnBack url="/PremiacionGeneral" />
          <div className="flex flex-col justify-center items-center responsi-container">
            <MainTitle />
            <span className="font-medium text-2xl">Delegación: {delation}</span>
            <div className="flex gap-2 mt-3">
              <PDFDownloadLink
                document={
                  <FilterGeneralPDF
                    filterGeneral={FilterDelegation}
                    delacion={delation}
                  />
                }
                fileName={`PremiacionDelegacion_${delation}.pdf`}
              >
                <button className="btn btn-primary">Descargar PDF</button>
              </PDFDownloadLink>
              <a
                className=""
                href={`${Constante.RUTA_API}/reportePremiacionPorDelegacion.php?delegacion=${delation}`}
              >
                <button className="btn btn-success">Descargar Excel</button>
              </a>
            </div>
            <table id="filterGeneral" className="tabla">
              <thead>
                <tr className="">
                  <th>*</th>
                  <th>#DP</th>
                  <th>PIRAMIDE</th>
                  <th>ORO</th>
                  <th>DEL.ORO</th>
                  <th>PLATA</th>
                  <th>DEL.PLATA</th>
                  <th>Bronce 1</th>
                  <th>DEL.BRONCE 1</th>
                  <th>Bronce 2</th>
                  <th>DEL.BRONCE 2</th>
                </tr>
              </thead>
              <tbody>
                {FilterDelegation.map((params) => (
                  <tr key={params.COD}>
                  <td>{params.COD}</td>
                  <td>{params.CANT_DEPORTISTAS}</td>
                  <td>
                    <a href={`/Premiacion/${params.PIRAMIDE}`} target="_blank">
                      {params.PIRAMIDE}
                    </a>
                  </td>
                  <td className="bg-yellow-300">
                    <a href={`/Premiacion/${params.PIRAMIDE}`} target="_blank">
                      {params.Oro}
                    </a>
                  </td>
                  <td>{params.delacion_oro}</td>
                  <td className="bg-slate-300">
                    <a href={`/Premiacion/${params.PIRAMIDE}`} target="_blank">
                      {params.silver}
                    </a>
                  </td>
                  <td>{params.delation_silver}</td>
                  <td className="bg-orange-300">
                    <a href={`/Premiacion/${params.PIRAMIDE}`} target="_blank">
                      {params.bronze}
                    </a>
                  </td>
                  <td>{params.delation_bronze}</td>
                  <td className="bg-orange-300">
                    <a href={`/Premiacion/${params.PIRAMIDE}`} target="_blank">
                      {params.bronze2}
                    </a>
                  </td>
                  <td>{params.delation_bronze2}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fragment>
      );
    }
  };

export default FilterGeneral