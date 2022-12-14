import { Fragment, useState } from 'react'
import useFecthcMedalls from '../../../hooks/useFecthMedalls'
import InputSearch from '../../../components/InputSearch'

const TableSilver = () => {
  const { silver } = useFecthcMedalls()
  const [search, setSearch2] = useState('')

  const Search = ({ target: { value } }) => {
    setSearch2(value)
  }

  const resultSearch = silver.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })
  
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center responsi-container_table">
      <InputSearch  value={search} change={Search} />
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
              <tr key={data.COD}>
                <td>{data.COD}</td>
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
