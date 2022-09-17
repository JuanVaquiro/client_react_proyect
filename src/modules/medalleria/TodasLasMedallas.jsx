import { Fragment, useEffect, useState } from 'react'
import Constante from '../../constante';

const TodasLasMedallas = () => {
    const [oro, setOro] = useState([]);
    const [plata, setPlata] = useState([])
    const [bronce, setBronce] = useState([])

  const Oro = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Oro.php`);
    const dataOro = await resp.json();
    setOro(dataOro)
  };
    
  const Plata = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Plata.php`);
    const dataPlata = await resp.json();
    setPlata(dataPlata)
  }; 

  const Bronce = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce1.php`);
    const dataBronce = await resp.json();
    setBronce(dataBronce)
  }; 

  useEffect(() => {
    Oro()
    Plata()
    Bronce()
  }, []);

  const medalleria =  oro.map((item) => {
    const { Plata, delacion_plata} = plata.find(item2 => item2.cod === item.COD)
    const { Bronce1, delacion_bronce1 } = bronce.find(item3 => item3.cod === item.COD)
    return { ...item, Plata, delacion_plata, Bronce1, delacion_bronce1 }
  })

  console.log(medalleria)
  console.log('Plata', plata);

  return (
    <Fragment>
    <table className="tabla">
          <thead>
            <tr>
              <th>COD</th>
              <th>#DEP</th>
              <th>PIRAMIDE</th>
              <th>ORO</th>
              <th>DELEGACION ORO</th>
              <th>PLATA</th>
              <th>DELEGACION PLATA</th>
              <th>Bronce 1</th>
              <th>DELEGACION BRONCE 1</th>
            </tr>
          </thead>
          <tbody>
        {
          medalleria.map((params) => (
            <tr key={params.COD}>
              <td>{params.COD}</td>
              <td>{params.CANT_DEPORTISTAS}</td>
              <td>{params.PIRAMIDE}</td>
              <td>{params.Oro}</td>
              <td>{params.delacion_oro}</td>
              <td>{params.Plata}</td>
              <td>{params.delacion_plata}</td>
              <td>{params.Bronce1}</td>
              <td>{params.delacion_bronce1}</td>
            </tr>
          ))
        }
        </tbody>
    </table>
    </Fragment>
  );
};

export default TodasLasMedallas