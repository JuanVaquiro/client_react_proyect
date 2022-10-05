import { useState } from 'react'
import useFecthcMedalls from '../../../hooks/useFecthMedalls';
import InputSearch from '../../../components/InputSearch'

const TableGold = () => {
  const { gold } = useFecthcMedalls()
  const [search, setSearch] = useState("");

  const Search = ({ target: { value } }) => {
    setSearch(value);
  };

  const resultSearch = gold.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase()) 
  });

  return (
    <div className="flex flex-col items-center justify-center responsi-container_table">
    <InputSearch  value={search} change={Search} />
      <table className="table table-hover w-9/12 table-cel">
        <thead>
          <tr className='table-dark text-white'>
            <th>COD</th>
            <th>PIRAMIDE</th>
            <th>ORO</th>
            <th>DELEGACION ORO</th>
          </tr>
        </thead>
        <tbody>
          {resultSearch.map((data) => (
            <tr key={data.COD}>
              <td>{data.COD}</td>
              <td>{data.PIRAMIDE}</td>
              <td>{data.Oro}</td>
              <td>{data.delacion_oro}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGold;
