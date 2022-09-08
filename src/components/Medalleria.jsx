import { useEffect, useState } from 'react'
import Constante from '../constante'

const SearchMedalleria = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  // const folderUser = async () => {
  //   const resp = await fetch(`${Constante.RUTA_API}/obtener_medalleria.php`)
  //   const data = await resp.json()
  //   console.log(data)
  //   setUsers(data)
  // }

  const sercher = ({ target: { value } }) => {
    setSearch(value)
    console.log(value)
  }

  // metodo de filtrado
  // const resultSearch = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))

  const resultSearch = users.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })

  // useEffect(() => {
  //   folderUser()
  // }, [])

  return (
    <div>
      <input value={search} onChange={sercher} type="text" placeholder='Serch' />
      <table>
        <thead>
          <tr>
            <th>Cod</th>
            <th>#DEP</th>
            <th>PIRAMIDE</th>
            <th>ORO</th>
            <th>Delegacion Oro</th>
            <th>Plata</th>
            <th>Delegacion Plata</th>
            <th>Bronce 1</th>
            <th>Delegacion Bronce 1</th>
            <th>Bronce 2</th>
            <th>Delegacion Bronce 2</th>
          </tr>
        </thead>
        <tbody>
          {
            resultSearch.map((data) => (
              <tr key={data.COD}>
                <td>{data.COD}</td>
                <td>{data.CANT_DEPORTISTAS}</td>
                <td>{data.PIRAMIDE}</td>
                <td>{data.ORO}</td>
                <td>{data.oro_premiado}</td>
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  )
}

export default SearchMedalleria
