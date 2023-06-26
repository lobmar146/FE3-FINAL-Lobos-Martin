import userImage from '../../assets/user.png'
import { Link } from 'react-router-dom'

import { BsHeartFill, BsHeart, BsInfoCircle } from 'react-icons/bs'
export default function Card(props) {
  const { odontologo, estilosCorazones, manejarFavoritos } = props

  return (
    <li>
      <img src={userImage} alt='Imagen de usuario' />
      <p>Nombre: {odontologo.name}</p>
      <p>User: {odontologo.username}</p>
      <Link to={`/Dentis/${odontologo.id}`}>
        {' '}
        <BsInfoCircle className='info' />
      </Link>
      {estilosCorazones[odontologo.id] === 'favorito' ? (
        <BsHeartFill
          className={estilosCorazones[odontologo.id]}
          onClick={() => manejarFavoritos(odontologo)}
        />
      ) : (
        <BsHeart
          className={estilosCorazones[odontologo.id]}
          onClick={() => manejarFavoritos(odontologo)}
        />
      )}
    </li>
  )
}
