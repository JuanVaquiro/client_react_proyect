import { Fragment, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Podium from "./components/Podium";
import useFecthcMedalls from './hooks/useFecthMedalls';
import MainTitle from "./components/MainTitle";
import Spinner from "./components/Loanding";
import Gold from './multimedia/medalGold.png'
import Silver from './multimedia/medalSilver.png'
import Bronze from './multimedia/medalBronze.png'
import CopaGold from './multimedia/copa-de-oro.png'
import CopaSilver from './multimedia/copa-de-plata.png'
import CopaBronze from './multimedia/copa-de-bronce.png'
import Ganadores from './multimedia/ganadores.png'
import ScreenShop from "./components/ScreenShop";

function Premiacion() {
    const { gold, silver, bronze, bronze2 } = useFecthcMedalls()
    const { piramide } = useParams()
    const [loading, setLoading] = useState(true)
   
    useEffect(() => {
        setTimeout(() => {  
          setLoading(false)
        },2100)
      },[]);

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
      console.log(premiacion);

    const Genero = () => {
      if( piramide.charAt(0) === 'F'){
      return 'FEMENINO'
     } else if( piramide.charAt(0) === 'M') {
      return 'MASCULINO'
     }
    }
    const loader = () => { return ( <Spinner /> ) }
  
    if(loading){
      return(loader())
    }
    else {
      return (
        <Fragment>
          <div id="PremiacionIMG" className="flex flex-col items-center justify-center p-6">
            <MainTitle />
            <h1 className="mb-4 text-2xl font-extrabold text-blue-900 md:text-3xl lg:text-4xl">
              {piramide} {Genero()}
            </h1>
            {premiacion.map((params) => (
              <div key={params.COD} className="flex flex-col justify-center items-center gap-2 md:flex-row">
                <img className="w-2/5" src={Ganadores} alt="" />
                <div>
                  {params.Oro !== "ESPERANDO COMPETIDOR" && 
                  params.Oro !== "BY" ? (
                    <Podium
                      name={params.Oro}
                      delation={params.delacion_oro}
                      color={'yellow'}
                      text={"ORO"}
                      icon={Gold}
                      copa={CopaGold}
                    />
                  ) : null}
                  {params.silver !== "ESPERANDO COMPETIDOR" &&
                  params.silver !== "BY" ? (
                    <Podium
                      name={params.silver}
                      delation={params.delation_silver}
                      color={"slate"}
                      text={"PLATA"}
                      icon={Silver}
                      copa={CopaSilver}
                    />
                  ) : null}
                  {params.bronze !== "ESPERANDO COMPETIDOR" &&
                  params.bronze !== "BY" ? (
                    <Podium
                      name={params.bronze}
                      delation={params.delation_bronze}
                      color={'orange'}
                      text={"BRONCE 1"}
                      icon={Bronze}
                      copa={CopaBronze}
                    />
                  ) : null}
                  {params.bronze2 !== "ESPERANDO COMPETIDOR" &&
                  params.bronze2 !== "BY" ? (
                    <Podium
                      name={params.bronze2}
                      delation={params.delation_bronze2}
                      color={'orange'}
                      text={"BRONCE 2"}
                      icon={Bronze}
                      copa={CopaBronze}
                    />
                  ) : null}
                </div>
              </div>
            ))}
            </div>
            <ScreenShop />
        </Fragment>
    );
  }
}

export default Premiacion