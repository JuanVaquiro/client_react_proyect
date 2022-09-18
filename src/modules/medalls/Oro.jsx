import { Fragment, useEffect, useState } from 'react'
import Constante from '../../constante'

const TablaOro = () => {
  const [oro, setOro] = useState([]);
  const [search, setSearch] = useState("");

  const Oro = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Oro.php`);
    const data = await resp.json();
    setOro(data);
  };

  const buscador = ({ target: { value } }) => {
    setSearch(value);
  };

  const BuscarResultado = oro.filter((elem) => {
    return JSON.stringify(elem).toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    Oro();
  }, []);

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
        <input
          className="p-1 border-2 border-sky-500 rounded-md w-1/3 mt-3"
          value={search}
          onChange={buscador}
          type="text"
          placeholder="Buscador"
        />
        <table className="tabla">
          <thead>
            <tr>
              <th>COD</th>
              <th>PIRAMIDE</th>
              <th>ORO</th>
              <th>DELEGACION ORO</th>
            </tr>
          </thead>
          <tbody>
            {BuscarResultado.map((data) => (
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
    </Fragment>
  );
};

export default TablaOro;
