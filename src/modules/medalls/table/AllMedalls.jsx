import { useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import Constante from '../../../constante'
import AllMedallsPDF from '../../../renderPDF/AllMedallsPDF'
import Spinner from '../../../components/Loanding'

const AllMedalls = () => {
  const [gold, setGold] = useState([])
  const [silver, setSilver] = useState([])
  const [bronze, setBronze] = useState([])
  const [bronze2, setBronze2] = useState([])
  const [medalls, setMedalls]= useState([])
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true)

  const Gold = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Oro.php`);
    const dataGold = await resp.json();
    setGold(dataGold)
  };
    
  const Silver = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Plata.php`);
    const dataSilver = await resp.json();
    setSilver(dataSilver)
  }; 

  const Bronze = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce1.php`);
    const dataBronze = await resp.json();
    setBronze(dataBronze)
  };

  const Bronze2 = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce2.php`);
    const dataBronze2 = await resp.json();
    setBronze2(dataBronze2)
  }; 
  
  const getMedalls = async () => {
    const result_gold = await Gold()
    const result_silver = await Silver()
    const result_bronze = await Bronze()
    const result_bronze2 = await Bronze2()
    setMedalls({
      result_gold,
      result_silver,
      result_bronze,
      result_bronze2
    })
  }

  useEffect(() => {
    getMedalls()
  }, []);

  useEffect(() => {
    setTimeout(() => {  
      setLoading(false)
    },3500)
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
        <PDFDownloadLink
          document={<AllMedallsPDF medalls={getAllMedalls} />}
          fileName="Medalleria.pdf"
        >
          <button className="btn btn-primary mt-3">Descargar PDF</button>
        </PDFDownloadLink>
        <input
          className="p-1 border-2 border-sky-500 rounded-md w-1/2 mt-3"
          value={search}
          onChange={Search}
          type="text"
          placeholder="Buscador"
        />
        <table className="tabla">
          <thead>
            <tr className=''>
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