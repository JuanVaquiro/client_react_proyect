import { Fragment, useEffect, useState } from 'react'
import Constante from '../constante'

const TablaPlata = () => {
  const [plata, setPlata] = useState([])
  const [search2, setSearch2] = useState('')

  const Plata = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Plata.php`)
    const dataPlata = await resp.json()
    console.log(dataPlata)
    setPlata(dataPlata)
  }

  const sercher2 = ({ target: { value } }) => {
    setSearch2(value)
    console.log(value)
  }

  const resultSearch = plata.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search2.toLowerCase())
  })
  
  useEffect(() => {
    Plata()
  }, [])

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
      <input
      value={search2}
      onChange={sercher2}
      type="text"
      placeholder="Buscador"
    />
        <table className="tabla">
          <thead>
            <tr>
              <th>PIRAMIDE</th>
              <th>PLATA</th>
              <th>DELEGACION PLATA</th>
            </tr>
          </thead>
          <tbody>
            {resultSearch.map((data) => (
              <tr key={''}>
                <td>{data.PIRAMIDE}</td>
                <td>{data.Plata}</td>
                <td>{data.delacion_plata}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default TablaPlata
