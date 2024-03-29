import { Fragment, useState, useEffect } from 'react'
import Constante from '../constante'

const MainTitle = () => {
  const [title, setTitle] = useState([])

  const getTitle = async () => { 
    const resp = await fetch(`${Constante.RUTA_API}/obtenerTitulo.php`)
    const dataTitle = await resp.json()
    setTitle(dataTitle)
  }

  useEffect(() => {
    getTitle()
  }, [])

  const textTitle = title.map(index => index.nombre)
  
  return (
    <Fragment>
      <h2 className="font-extrabold text-center text-2xl mb-2 p-1 md:text-4xl md:p-3 md:mb-4 lg:text-4xl md:pt-9 lg:mb-5 bg-clip-text">
        {textTitle}
      </h2>
    </Fragment>
  );
}

export default MainTitle