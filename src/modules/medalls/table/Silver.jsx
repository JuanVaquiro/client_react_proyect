import { Fragment, useEffect, useState } from 'react'
import Constante from '../../../constante'

const TableSilver = () => {
  const [silver, setSilver] = useState([])
  const [search, setSearch2] = useState('')

  const Silver = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Plata.php`)
    const dataPlata = await resp.json()
    setSilver(dataPlata)
  }

  const sercher = ({ target: { value } }) => {
    setSearch2(value)
  }

  const resultSearch = silver.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })
  
  useEffect(() => {
    Silver()
  }, [])

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center responsi-container_table">
      <input
      className="p-1 border-2 border-sky-500 rounded-md w-1/2 mt-3 mb-3"
      value={search}
      onChange={sercher}
      type="text"
      placeholder="Buscador"
    />
        <table className="table table-hover w-9/12 table-cel">
          <thead>
            <tr className='table-dark text-white'>
              <th>COD</th>
              <th>PIRAMIDE</th>
              <th>PLATA</th>
              <th>DELEGACION PLATA</th>
            </tr>
          </thead>
          <tbody>
            {resultSearch.map((data) => (
              <tr key={data.cod}>
                <td>{data.cod}</td>
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

export default TableSilver
