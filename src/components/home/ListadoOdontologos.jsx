import { useContext, useState, useEffect } from 'react'
import { ElementosGlobales } from '../../context/ElementosGlobales'
import Card from './Card'

export default function ListadoOdontologos() {
  const { odontologos } = useContext(ElementosGlobales)

  const [odontologosFavoritos, setOdontologosFavoritos] = useState(
    JSON.parse(localStorage.getItem('odontologosFavoritos') || '[]')
  )

  function agregarOdontologoFavorito(odontologoAgregar) {
    if (
      !odontologosFavoritos.some(
        odontologoFavorito => odontologoFavorito.id === odontologoAgregar.id
      )
    ) {
      const nuevosFavoritos = [...odontologosFavoritos, odontologoAgregar]
      setOdontologosFavoritos(nuevosFavoritos)
      localStorage.setItem(
        'odontologosFavoritos',
        JSON.stringify(nuevosFavoritos)
      )
    }
  }

  function eliminarOdontologoFavorito(odontologoAEliminar) {
    const nuevosFavoritos = odontologosFavoritos.filter(
      odontologo => odontologo.id !== odontologoAEliminar.id
    )
    setOdontologosFavoritos(nuevosFavoritos)
    localStorage.setItem(
      'odontologosFavoritos',
      JSON.stringify(nuevosFavoritos)
    )
  }

  const manejarFavoritos = odontologo => {
    if (esFavorito(odontologo)) {
      eliminarOdontologoFavorito(odontologo)
    } else {
      agregarOdontologoFavorito(odontologo)
    }
  }

  const esFavorito = odontologo => {
    return odontologosFavoritos.some(
      odontologoFavorito => odontologoFavorito.id === odontologo.id
    )
  }

  return (
    <section className='section-cards'>
      <ul className='covers'>
        {odontologos.map(odontologo => (
          <Card
            key={odontologo.id}
            odontologo={odontologo}
            manejarFavoritos={manejarFavoritos}
            esFavorito={esFavorito(odontologo)}
          />
        ))}
      </ul>
    </section>
  )
}
