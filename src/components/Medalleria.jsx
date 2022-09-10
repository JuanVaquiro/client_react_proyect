import { useEffect, useState } from 'react'
import Constante from '../constante'
// import {  Document, StyleSheet } from '@react-pdf/renderer';

const SearchMedalleria = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')

  const folderUser = async () => {
    // const resp = await fetch(`${Constante.RUTA_API}/obtener_medalleria.php`)
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
    setUsers(data)
  }

  const sercher = ({ target: { value } }) => {
    setSearch(value)
    console.log(value)
  }

  // metodo de filtrado
  // const resultSearch = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
 
  const resultSearch = users.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    folderUser()
  }, [])

  return (
    <div className='flex flex-col items-center justify-center'>
      <button className='btn btn-primary'>VerPDF</button>
      <input value={search} onChange={sercher} type="text" placeholder='Serch' />
      <table  className="tabla">
        <thead>
          <tr>
            <th>Cod</th>
            <th>#DEP</th>
            <th>PIRAMIDE</th>
            <th>ORO</th>
          </tr>
        </thead>
        <tbody>
          {
            resultSearch.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  )
}

export default SearchMedalleria
