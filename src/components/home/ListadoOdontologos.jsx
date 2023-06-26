import { useContext, useState, useEffect } from 'react'
import { ElementosGlobales } from '../../context/ElementosGlobales'
import Card from './Card'

export default function ListadoOdontologos() {
  const { odontologos } = useContext(ElementosGlobales)

  // Usamos un estado para visualizar los favoritos, es un objeto
  //este objeto, tiene en cada posicion correspondiende el id "favorito" o "", y eso
  //hace un renderizado condicional a los corazones
  const [estilosCorazones, setEstilosCorazones] = useState({})
  const [odontologosFavoritos, setOdontologosFavoritos] = useState(
    JSON.parse(localStorage.getItem('odontologosFavoritos') || '[]')
  )

  useEffect(() => {
    // Actualizar los estilos de corazón para los odontólogos favoritos
    const updatedEstilosCorazones = {}
    odontologosFavoritos.forEach(odontologo => {
      updatedEstilosCorazones[odontologo.id] = 'favorito'
    })
    setEstilosCorazones(updatedEstilosCorazones)
  }, [])

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
    if (estilosCorazones[odontologo.id] === 'favorito') {
      setEstilosCorazones(prevState => ({
        ...prevState,
        [odontologo.id]: ''
      }))
      eliminarOdontologoFavorito(odontologo)
    } else {
      setEstilosCorazones(prevState => ({
        ...prevState,
        [odontologo.id]: 'favorito'
      }))
      agregarOdontologoFavorito(odontologo)
    }
  }

  return (
    <section className='section-cards'>
      <ul className='covers'>
        {odontologos.map(odontologo => (
          <Card
            key={odontologo.id}
            odontologo={odontologo}
            manejarFavoritos={manejarFavoritos}
            estilosCorazones={estilosCorazones}
          />
        ))}
      </ul>
    </section>
  )
}
