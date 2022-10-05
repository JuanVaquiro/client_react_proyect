import { useEffect, useState } from "react";
import { Gold, Silver, Bronze, Bronze2 } from "../helpers/getMedalls";

const useFecthcMedalls = () => {
  const [gold, setGold] = useState([])
  const [silver, setSilver] = useState([])
  const [bronze, setBronze] = useState([])
  const [bronze2, setBronze2] = useState([])
  const [medalls, setMedalls]= useState([])

  const getMedalls = async () => {
    const result_gold = await Gold()
    const result_silver = await Silver()
    const result_bronze = await Bronze()
    const result_bronze2 = await Bronze2()
    setGold( result_gold )
    setSilver( result_silver )
    setBronze( result_bronze )
    setBronze2( result_bronze2 )
    setMedalls({
      result_gold,
      result_silver,
      result_bronze,
      result_bronze2,
    });
  };

  useEffect(() => {
    getMedalls()
  }, []);

  return {
    gold,
    silver,
    bronze,
    bronze2
  };
};

export default useFecthcMedalls;