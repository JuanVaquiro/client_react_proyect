import { Fragment, useEffect, useState } from 'react'
import Constante from '../../constante'
import { PDFDownloadLink } from '@react-pdf/renderer'
import MedalleriaPDF from '../../renderPDF/OroPDF'

const TablaOro = () => {
  const [oro, setOro] = useState([]);
  const [search, setSearch] = useState("");

  const dataORO = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Oro.php`);
    const data = await resp.json();
    setOro(data);
  };

  const sercher = ({ target: { value } }) => {
    setSearch(value);
  };

  const resultSearch = oro.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    dataORO();
  }, []);

  return (
    <Fragment>
      <PDFDownloadLink
        document={<MedalleriaPDF oro={oro} />}
        fileName="Medalleria.pdf"
        >
        <button className="btn btn-primary">Descargar PDF</button>
      </PDFDownloadLink>
      <div className="flex flex-col items-center justify-center">
        <input
          className="p-1 border-2 border-sky-500 rounded-md w-1/3 mt-3"
          value={search}
          onChange={sercher}
          type="text"
          placeholder="Buscador"
        />
        <table className="tabla">
          <thead>
            <tr>
              <th>COD</th>
              <th>#DEP</th>
              <th>PIRAMIDE</th>
              <th>ORO</th>
              <th>DELEGACION ORO</th>
            </tr>
          </thead>
          <tbody>
            {resultSearch.map((data) => (
              <tr key={data.COD}>
                <td>{data.COD}</td>
                <td>{data.CANT_DEPORTISTAS}</td>
                <td>{data.PIRAMIDE}</td>
                <td>{data.Oro}</td>
                <td>{data.delacion_oro}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TablaOro;
