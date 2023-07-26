import { Fragment, useEffect, useState } from 'react'
import Constante from '../constante'

const TextGeneral = () => {
    const [text, setText] = useState([])

    const SetText = async () => {
        const resp = await fetch(`${Constante.RUTA_API}/obtenerTextMedalleria.php`)
        const data = await resp.json()
        setText(data)
      }
      useEffect(() => {
        SetText()
      }, [])

  return (
    <Fragment>
    {
        text.map((params) => (
            <div key={params.id} className="flex">
                <span key={params.id} className="font-medium"> ☑  {params.texto} </span>
            </div>
        ))
       }
    </Fragment>
  )
}

export default TextGeneral