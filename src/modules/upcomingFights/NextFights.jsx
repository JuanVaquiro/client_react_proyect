import { Fragment, useEffect, useState } from 'react'
import BtnBack from '../../components/BtnBack'
import Constante from "../../constante"

const NextFights = () => {
  const [ fightsBlue, setFighsBlue ] = useState([])
  const [ fightsRed, setFighsRed ] = useState([])
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
  
  return (
    <Fragment >
      <BtnBack url='/' />
      <div className='flex flex-col justify-center items-center responsi-container'>
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
          
        </tbody>
      </table>
      </div>
    </Fragment>
  )
}

export default NextFights