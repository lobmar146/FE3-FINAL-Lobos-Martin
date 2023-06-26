import { useContext, useState, useEffect } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'
import ListadoOdontologos from '../components/home/ListadoOdontologos'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  const { odontologos } = useContext(ElementosGlobales)

  return (
    <>
      {console.log(odontologos)}
      <h1>Este es el listados de Odontologos de la manada 🐺 </h1>
      {loading ? <p>loading...</p> : <p>{title}</p>}
      <ListadoOdontologos />
    </>
  )
}
