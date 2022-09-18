import { Fragment, useEffect, useState } from 'react'
import Constante from '../../constante';

const AllMedalls = () => {
    const [gold, setGold] = useState([])
    const [silver, setSilver] = useState([])
    const [bronze, setBronze] = useState([])
    const [bronze2, setBronze2] = useState([])
    const [medalls, setMedalls]= useState([])

  const Gold = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Oro.php`);
    const dataGold = await resp.json();
    setGold(dataGold)
  };
    
  const Silver = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Plata.php`);
    const dataSilver = await resp.json();
    setSilver(dataSilver)
  }; 

  const Bronce = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce1.php`);
    const dataBronze = await resp.json();
    setBronze(dataBronze)
  };

  const Bronce2 = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce2.php`);
    const dataBronze2 = await resp.json();
    setBronze2(dataBronze2)
  }; 
  
  const getMedalls = async () => {
    const result_gold = await Gold()
    const result_silver = await Silver()
    const result_bronze = await Bronce()
    const result_bronze2 = await Bronce2()
    setMedalls({
      result_gold,
      result_silver,
      result_bronze,
      result_bronze2
    })
  }

  useEffect(() => {
    getMedalls()
  }, []);

  const getAllMedalls = gold.map(item=> {
    const getSilver = silver.find(element=> element.cod === item.COD) ?? {}
    const getBronze = bronze.find(element=> element.COD === item.COD) ?? {}
    const getBronze2 = bronze2.find(element=> element.COD === item.COD) ?? {}
    return {
      ...item,
      silver: getSilver?.Plata ?? "",
      delation_silver: getSilver?.delacion_plata ?? "",
      bronze: getBronze?.Bronce1 ??"",
      delation_bronze: getBronze?.delacion_bronce1 ??"",
      bronze2: getBronze2?.Bronce2 ??"",
      delation_bronze2: getBronze2?.delacion_bronce2 ??""
    }
  })

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
              <th>Bronce 2</th>
              <th>DELEGACION BRONCE 2</th>
            </tr>
          </thead>
          <tbody>
        {
            getAllMedalls.map((params) => (
            <tr key={params.COD}>
              <td>{params.COD}</td>
              <td>{params.CANT_DEPORTISTAS}</td>
              <td>{params.PIRAMIDE}</td>
              <td>{params.Oro}</td>
              <td>{params.delacion_oro}</td>
              <td>{params.silver}</td>
              <td>{params.delation_silver}</td>
              <td>{params.bronze}</td>
              <td>{params.delation_bronze}</td>
              <td>{params.bronze2}</td>
              <td>{params.delation_bronze2}</td>
            </tr>
          ))
        }
        </tbody>
    </table>
    </Fragment>
  );
};

export default AllMedalls