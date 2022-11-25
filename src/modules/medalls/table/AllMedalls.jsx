import { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import useFecthcMedalls from '../../../hooks/useFecthMedalls'
import AllMedallsPDF from '../../../renderPDF/AllMedallsPDF'
import Spinner from '../../../components/Loanding'
import BtnExport from '../../../renderExcel/BtnExportExcel'

const AllMedalls = () => {
  const { gold, silver, bronze, bronze2 } = useFecthcMedalls()
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true)

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
      bronze: getBronze?.Bronce1 ?? "",
      delation_bronze: getBronze?.delacion_bronce1 ?? "",
      bronze2: getBronze2?.Bronce2 ?? "",
      delation_bronze2: getBronze2?.delacion_bronce2 ?? ""
    }
  })

  const Search = ({ target: { value } }) => {
    setSearch(value);
  }

  const SearchResult = getAllMedalls.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase());
  })

  const loader = () => { return ( <Spinner /> ) }

  if(loading){
    return(loader())
  }
  else {
    return (
      <div className='flex flex-col justify-center items-center responsi-container'>
        <div className='flex gap-2 mt-3'>
          <PDFDownloadLink
            document={<AllMedallsPDF medalls={getAllMedalls} />}
            fileName="Medalleria.pdf"
          >
            <button className="btn btn-primary">Descargar PDF</button>
          </PDFDownloadLink>
          <a href="http://piramides.comunisoft.com/reporteMedalleria.php">
              <button className='btn btn-success'>
                Descargar Excel
              </button>
          </a>
        </div>
        <input
          className="p-1 border-2 border-sky-500 rounded-md w-1/2 mt-3"
          value={search}
          onChange={Search}
          type="text"
          placeholder="Buscador"
        />
        <table id="TableXLSX" className="tabla">
          <thead>
            <tr className=''>
              <th>*</th>
              <th>#DP</th>
              <th>PIRAMIDE</th>
              <th>ORO</th>
              <th>DEL.ORO</th>
              <th>PLATA</th>
              <th>DEL.PLATA</th>
              <th>BRONCE 1</th>
              <th>DEL.BRONCE 1</th>
              <th>BRONCE 2</th>
              <th>DEL.BRONCE 2</th>
            </tr>
          </thead>
          <tbody>
            {SearchResult.map((params) => (
              <tr key={params.COD}>
                <td>{params.COD}</td>
                <td>{params.CANT_DEPORTISTAS}</td>
                <td>{params.PIRAMIDE}</td>
                <td className="bg-yellow-300">{params.Oro}</td>
                <td>{params.delacion_oro}</td>
                <td className="bg-slate-300">{params.silver}</td>
                <td>{params.delation_silver}</td>
                <td className="bg-orange-300">{params.bronze}</td>
                <td>{params.delation_bronze}</td>
                <td className="bg-orange-300">{params.bronze2}</td>
                <td>{params.delation_bronze2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
  }
};

export default AllMedalls