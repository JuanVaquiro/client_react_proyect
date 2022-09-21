import { useEffect, useState } from 'react'
import InputSearch from '../../../components/InputSearch'
import Constante from '../../../constante'

const TableBronze2 = () => {
  const [bronze, setBronze] = useState([])
  const [search, setSearch] = useState('')

  const Bronce = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce2.php`)
    const dataBronze = await resp.json()
    setBronze(dataBronze)
  }

  const Searcher = ({ target: { value } }) => {
    setSearch(value)
  }

  const resultSearch = bronze.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })
  
  useEffect(() => {
    Bronce()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center responsi-container_table">
      <InputSearch value={search} change={Searcher} />
      <table className="table table-hover w-9/12 table-cel">
        <thead>
          <tr className='table-dark text-white'>
            <th>COD</th>
            <th>PIRAMIDE</th>
            <th>BRONCE 2</th>
            <th>DELEGACION BRONCE 2</th>
          </tr>
        </thead>
        <tbody>
          {resultSearch.map((data) => (
            <tr key={data.COD}>
              <td>{data.COD}</td>
              <td>{data.PIRAMIDE}</td>
              <td>{data.Bronce2}</td>
              <td>{data.delacion_bronce2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableBronze2
