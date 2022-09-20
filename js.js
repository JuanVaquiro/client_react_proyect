const array1 = [
    {COD: 7,  delacion_oro: 'CASANARE'},
    {COD: 8, delacion_oro: 'BOYACA'},
    {COD: 9, delacion_oro: 'MAGDALENA'},
    {COD: 10, delacion_oro: 'CASANARE'},
    {COD: 11, delacion_oro: 'CUNDINAMARCA'}
]
const array2 = [
    {cod: 7, delacion_plata: 'CORDOBA'},
    {cod: 8, delacion_plata: 'SANTANDER'},
    {cod: 9, delacion_plata: 'RISARALDA'},
    {cod: 10, delacion_plata: 'MAGDALENA'},
    {cod: 11, delacion_plata: 'CASANARE'}
]
const array3 = [
    {cod: 7, delacion_bronce1: 'SISTEMA FENIX'},
    {cod: 8, delacion_bronce1: 'SISTEMA FENIX'},
    {cod: 9, delacion_bronce1: 'SISTEMA FENIX'},
    {cod: 10, delacion_bronce1: 'MAGDALENA'},
    {cod: 11, delacion_bronce1: 'BOYACA'}
]

const newArray1 = array1.map((item) => {
    const { delacion_plata } = array2.find( item2 => item2.cod === item.COD)
    const { delacion_bronce1 } = array3.find( item2 => item2.cod === item.COD)
    return{ ...item, delacion_plata, delacion_bronce1}
})

const newArray = [
    {COD: 7, delacion_oro: 'CASANARE', delacion_plata: 'CORDOBA', delacion_bronce1: 'SISTEMA'},
    {COD: 8, delacion_oro: 'BOYACA', delacion_plata: 'SANTANDER', delacion_bronce1: 'SISTEMA FENIX'},
    {COD: 9, delacion_oro: 'MAGDALENA', delacion_plata: 'RISARALDA', delacion_bronce1: 'SISTEMA FENI'},
    {COD: 10, delacion_oro: 'CASANARE', delacion_plata: 'MAGDALENA', delacion_bronce1: 'MAGDALENA'},
    {COD: 11, delacion_oro: 'CUNDINAMARCA', delacion_plata: 'CASANARE', delacion_bronce1: 'BOYACA'}
]

