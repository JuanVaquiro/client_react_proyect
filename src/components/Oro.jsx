import { Fragment, useEffect, useState } from 'react'
import Constante from '../constante'

const TablaOro = () => {
  const [oro, setOro] = useState([])
  const [search, setSearch] = useState('')

  const dataORO = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Oro.php`)
    const data = await resp.json()
    setOro(data)
  }

  const sercher = ({ target: { value } }) => {
    setSearch(value)
    console.log(value)
  }

  const resultSearch = oro.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })
  
  useEffect(() => {
    dataORO()
  }, [])

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
          <input
            value={search}
            onChange={sercher}
            type="text"
            placeholder="Buscador"
          />
        <table className="tabla">
          <thead>
            <tr>
              <th>COD</th>
              <th>#DEP</th>
              <th>PIRAMIDE</th>
              <th>ORO</th>
              <th>DELEGACION ORO</th>
            </tr>
          </thead>
          <tbody>
            {resultSearch.map((data) => (
              <tr key={data.COD}>
                <td>{data.COD}</td>
                <td>{data.CANT_DEPORTISTAS}</td>
                <td>{data.PIRAMIDE}</td>
                <td>{data.Oro}</td>
                <td>{data.delacion_oro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default TablaOro
