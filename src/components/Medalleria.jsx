import { useEffect, useState } from 'react'
import Constante from '../constante'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import MedalleriaPDF from '../renderPDF/medalleriaPDF'

const SearchMedalleria = () => {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState('')
  const [verPDF, setVerPDF] = useState(false)

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

  const mostrarPDF = () => {
    setVerPDF(true)
  }

  // metodo de filtrado
  // const resultSearch = !search ? users : users.filter((dato) => dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
 
  const resultSearch = users.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase())
  })
  console.log(users);
  useEffect(() => {
    folderUser()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center">
      <input
        value={search}
        onChange={sercher}
        type="text"
        placeholder="Serch"
      />
      <table className="tabla">
        <thead>
          <tr>
            <th>Cod</th>
            <th>#DEP</th>
            <th>PIRAMIDE</th>
            <th>ORO</th>
          </tr>
        </thead>
        <tbody>
          {resultSearch.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.username}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='flex gap-2'>
        <PDFDownloadLink
          document={<MedalleriaPDF users={users} />}
          fileName="Medalleria.pdf"
        >
          <button className="btn btn-primary">Descargar PDF</button>
        </PDFDownloadLink>

        <button className="btn btn-primary" onClick={() => mostrarPDF()}>
          Ver Documento PDF
        </button>
      </div>

      {verPDF ? (
        <div
          className="fancybox-container fancybox-is-open"
          role="dialog"
          tabIndex="-1"
        >
          <div className="fancybox-bg"></div>
          <div className="flex flex-col items-center justify-center mt-11">
            <div className="fancybox-iframe">
              <button
                className="btn btn-danger margin-box"
                onClick={() => setVerPDF(false)}
              >
                {" "}
                Cerrar PDF
              </button>
              <PDFViewer style={{ width: "90%", height: "90vh" }}>
                <MedalleriaPDF users={users} />
              </PDFViewer>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SearchMedalleria
