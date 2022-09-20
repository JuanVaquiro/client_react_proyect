import { useEffect, useState } from 'react'
import Constante from '../../../constante'

const TableBronze = () => {
  const [bronze, setBronze] = useState([])
  const [search2, setSearch2] = useState('')

  const Bronce = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce1.php`)
    const dataBronce = await resp.json()
    setBronze(dataBronce)
  }

  const Search = ({ target: { value } }) => {
    setSearch2(value)
  }

  const resultSearch = bronze.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search2.toLowerCase())
  })
  
  useEffect(() => {
    Bronce()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        className="p-1 border-2 border-sky-500 rounded-md w-1/3 mt-3"
        value={search2}
        onChange={Search}
        type="text"
        placeholder="Buscador"
      />
      <table className="tabla">
        <thead>
          <tr>
            <th>PIRAMIDE</th>
            <th>PIRAMIDE</th>
            <th>BRONCE 1</th>
            <th>DELEGACION BRONCE 1</th>
          </tr>
        </thead>
        <tbody>
          {resultSearch.map((data) => (
            <tr key={data.COD}>
              <td>{data.COD}</td>
              <td>{data.PIRAMIDE}</td>
              <td>{data.Bronce1}</td>
              <td>{data.delacion_bronce1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableBronze
