import { Fragment, useEffect, useState } from 'react'
import Constante from '../constante'

const TablaBronce1 = () => {
  const [bronce, setBronce] = useState([])
  const [search2, setSearch2] = useState('')

  const Bronce = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce1.php`)
    const dataBronce = await resp.json()
    setBronce(dataBronce)
  }

  const sercher2 = ({ target: { value } }) => {
    setSearch2(value)
    console.log(value)
  }

  const resultSearch = bronce.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search2.toLowerCase())
  })
  
  useEffect(() => {
    Bronce()
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
              <th>BRONCE 1</th>
              <th>DELEGACION BRONCE 1</th>
            </tr>
          </thead>
          <tbody>
            {resultSearch.map((data) => (
              <tr key={''}>
                <td>{data.PIRAMIDE}</td>
                <td>{data.Bronce1}</td>
                <td>{data.delacion_bronce1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default TablaBronce1
