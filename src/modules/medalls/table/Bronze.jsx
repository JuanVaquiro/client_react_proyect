import { useState } from 'react'
import InputSearch from '../../../components/InputSearch'
import useFecthcMedalls from '../../../hooks/useFecthMedalls'

const TableBronze = () => {
  const { bronze } = useFecthcMedalls()
  const [search, setSearch] = useState('')
  
  console.log(bronze);
  const Search = ({ target: { value } }) => {
    setSearch(value)
  }

  const resultSearch = bronze.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <div className="flex flex-col items-center justify-center responsi-container_table">
      <InputSearch  value={search} change={Search} />
      <table className="table table-hover w-9/12 table-cel">
        <thead>
          <tr className='table-dark text-white'>
            <th>COD</th>
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
