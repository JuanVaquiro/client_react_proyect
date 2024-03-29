import { Fragment, useEffect, useState } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import Spinner from '../../components/Loanding'
import BtnBack from '../../components/BtnBack'
import InputSearch from '../../components/InputSearch'
import Constante from "../../constante"
import NextFightsPDF from '../../renderPDF/NextFightsPDF'

const NextFights = () => {
  const [ fightsBlue, setFighsBlue ] = useState([])
  const [ fightsRed, setFighsRed ] = useState([])
  const [search, setSearch] = useState('')
  const [fights, setfights] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {  
        setLoading(false)
      },1500)
    },[]);

  const FightsBlue = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtenerCompetidorAzul.php`)
    const data = await resp.json()
    setFighsBlue(data)
  }

  const FightsRed = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtenerCompetidorRojo.php`)
    const data = await resp.json()
    setFighsRed(data)
  }

  const getFights = async () => {
    const result_blue = await FightsBlue()
    const result_red = await FightsRed()
    setfights({
      result_blue,
      result_red,
    })
  }

  useEffect(() => {
    getFights()
  }, [])

  const Fights = fightsBlue.map(item=> {
    const getFightsRed = fightsRed.find(element=> element.num === item.no) ?? {}
    return {
      ...item,
      delegacion_rojo: getFightsRed?.delegacion ?? "",
      rojo: getFightsRed?.rojo ?? "",
    }
  })
  
  const Searcher = ({ target: { value } }) => {
    setSearch(value)
  }

  const resultSearch = Fights.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })

  const loader = () => { return ( <Spinner /> ) }
  
    if(loading){
      return(loader())
    }
    else {
    return (
      <Fragment>
        <BtnBack url="/" />
        <div className="flex flex-col justify-center items-center responsi-container2">
          <h2 className="text-3xl font-medium text-center">PRÓXIMOS COMBATES</h2>
          <div className="flex gap-2 mt-3">
            <PDFDownloadLink
              document={<NextFightsPDF NextFights={Fights} />}
              fileName="ProximosCombates.pdf"
            >
              <button className="btn btn-primary">Descargar PDF</button>
            </PDFDownloadLink>
            <a href={`${Constante.RUTA_API}/reporteCombatesProximos.php`}>
              <button className="btn btn-success">Descargar Excel</button>
            </a>
          </div>
          <InputSearch value={search} change={Searcher} />
          <table id="TableXLSX" className="tabla">
            <thead>
              <tr className="">
                <th>No</th>
                <th>CATEGORIA</th>
                <th>DELEGACION</th>
                <th>AZUL</th>
                <th>DELEGACION</th>
                <th>ROJO</th>
              </tr>
            </thead>
            <tbody>
              {resultSearch.map((params) => (
                <tr key={params.no}>
                  <td>{params.no}</td>
                  <td>{params.categoria}</td>
                  <td>{params.delegacion}</td>
                  <td className="bg-sky-200 hover:bg-blue-400">{params.azul}</td>
                  <td>{params.delegacion_rojo}</td>
                  <td className="bg-red-200 hover:bg-red-300">{params.rojo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default NextFights