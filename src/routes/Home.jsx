import { useContext, useState } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'
import ListadoOdontologos from '../components/home/ListadoOdontologos'
import { GiWolfHead } from 'react-icons/gi'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  const { odontologos } = useContext(ElementosGlobales)

  return (
    <>
      <section className='home transition-element'>
        {console.log(odontologos)}
        <h1>
          Este es el listados de Odontologos de la manada{' '}
          <GiWolfHead className='h1' />{' '}
        </h1>
        {loading ? <p>loading...</p> : <p>{title}</p>}
        <ListadoOdontologos />
      </section>
    </>
  )
}
