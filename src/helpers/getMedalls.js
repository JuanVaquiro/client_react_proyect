import Constante from '../constante'

export const Gold = async () => {
  const resp = await fetch(`${Constante.RUTA_API}/obtener_Oro.php`);
  const dataGold = await resp.json();
  return dataGold;
};

export const Silver = async () => {
  const resp = await fetch(`${Constante.RUTA_API}/obtener_Plata.php`);
  const dataSilver = await resp.json();
  return dataSilver;
};

export const Bronze = async () => {
  const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce1.php`);
  const dataBronze = await resp.json();
  return dataBronze;
};

export const Bronze2 = async () => {
  const resp = await fetch(`${Constante.RUTA_API}/obtener_Bronce2.php`);
  const dataBronze2 = await resp.json();
  return dataBronze2;
};
