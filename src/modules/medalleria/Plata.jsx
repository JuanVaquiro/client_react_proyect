import { Fragment, useEffect, useState } from 'react'
import Constante from '../../constante'
import { PDFDownloadLink } from '@react-pdf/renderer'
import PlataPDF from '../../renderPDF/PlataPDF'

const TablaPlata = () => {
  const [plata, setPlata] = useState([])
  const [search2, setSearch2] = useState('')

  const Plata = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Plata.php`)
    const dataPlata = await resp.json()
    setPlata(dataPlata)
  }

  const sercher2 = ({ target: { value } }) => {
    setSearch2(value)
  }

  const resultSearch = plata.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search2.toLowerCase())
  })
  
  useEffect(() => {
    Plata()
  }, [])

  return (
    <Fragment>
    {/* <PDFDownloadLink
        document={<PlataPDF plata={plata}/>}
        fileName="Plata.pdf"
        >
        <button className="btn btn-primary">Descargar PDF</button>
  </PDFDownloadLink> */}
      <div className="flex flex-col items-center justify-center">
      <input
      className="p-1 border-2 border-sky-500 rounded-md w-1/3 mt-3"
      value={search2}
      onChange={sercher2}
      type="text"
      placeholder="Buscador"
    />
        <table className="tabla">
          <thead>
            <tr>
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

export default TablaPlata
