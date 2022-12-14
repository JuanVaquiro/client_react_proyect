import {useState, useEffect } from 'react'
import Constante from "../constante";

const TODAY = new Date();

const NowDate = () => {     
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZoneName = 'short';
    const nowDate = TODAY.toLocaleString('COL', options);
    return nowDate
}

const Hours = () => { 
    let hours = TODAY.toLocaleTimeString('es-CO');
    return hours
}

const ImgDeporte = () => '/img/encabezadoLargo.png'

const MainTitle = () => {
  const [title, setTitle] = useState([]);

  const getTitle = async () => {
    const resp = await fetch(`${Constante.RUTA_API}/obtenerTitulo.php`);
    const dataTitle = await resp.json();
    setTitle(dataTitle);
  };
  
  useEffect(() => {
    getTitle();
  }, []);

  const textTitle = title.map((index) => index.nombre);

  return textTitle;
};
 
export { NowDate, Hours, MainTitle, ImgDeporte}