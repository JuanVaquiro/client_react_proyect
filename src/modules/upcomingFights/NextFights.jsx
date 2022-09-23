import { Fragment, useEffect, useState } from 'react'
import BtnBack from '../../components/BtnBack'
import InputSearch from '../../components/InputSearch'
import MainTitle from '../../components/MainTitle'
import Constante from "../../constante"

const NextFights = () => {
  const [ fightsBlue, setFighsBlue ] = useState([])
  const [ fightsRed, setFighsRed ] = useState([])
  const [search, setSearch] = useState('')
  const [fights, setfights] = useState([])

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
  // console.log(Fights)

  const Searcher = ({ target: { value } }) => {
    setSearch(value)
  }

  const resultSearch = Fights.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Fragment >
      <BtnBack url='/' />
      <div className='flex flex-col justify-center items-center responsi-container'>
      <h2 className='text-3xl font-medium text-center'>PROXIMOS COMBATES</h2>
      <InputSearch value={search} change={Searcher} />
      <table className="tabla">
        <thead>
          <tr className=''>
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
            <td className='bg-sky-200 hover:bg-blue-400'>{params.azul}</td>
            <td>{params.delegacion_rojo}</td>
            <td className='bg-red-200 hover:bg-red-300'>{params.rojo}</td>
          </tr>
        ))}
        </tbody>
      </table>
      </div>
    </Fragment>
  )
}

export default NextFights