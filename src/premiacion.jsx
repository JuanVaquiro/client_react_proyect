import { useParams } from "react-router-dom";
import useFecthcMedalls from './hooks/useFecthMedalls';

function Premiacion() {
    const { gold, silver, bronze, bronze2 } = useFecthcMedalls()
    const { piramide } = useParams()

    const getAllMedalls = gold.map(item=> {
        const getSilver = silver.find(element=> element.COD === item.COD) ?? {}
        const getBronze = bronze.find(element=> element.COD === item.COD) ?? {}
        const getBronze2 = bronze2.find(element=> element.COD === item.COD) ?? {}
        return {
          ...item,
          silver: getSilver?.Plata ?? "",
          delation_silver: getSilver?.delacion_plata ?? "",
          bronze: getBronze?.Bronce1 ?? "",
          delation_bronze: getBronze?.delacion_bronce1 ?? "",
          bronze2: getBronze2?.Bronce2 ?? "",
          delation_bronze2: getBronze2?.delacion_bronce2 ?? ""
        }
      })


    const premiacion = getAllMedalls.filter((elem) => {
        return elem = elem.PIRAMIDE === piramide
    })

    console.log(premiacion)
  return (
    <div>
        <span className="font-medium text-2xl">Piramide: {piramide}</span>
           {
            premiacion.map((params) => (
                <div className="flex">
                    <p>{params.Oro}</p><span>🥇</span>
                    <p>{params.silver}</p><span>🥈</span>
                    <p>{params.bronze}</p><span>🥉</span>
                    <p>{params.bronze2}</p><span>🏅</span>
                </div>
            ))
           }
    </div>
  )
}

export default Premiacion