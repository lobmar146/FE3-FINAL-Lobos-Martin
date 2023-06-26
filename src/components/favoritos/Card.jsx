import userImage from '../../assets/user.png'

import { BsFillTrashFill } from 'react-icons/bs'
export default function Card(props) {
  const { odontologoFavorito, eliminarOdontologoFavorito } = props

  return (
    <li>
      <img src={userImage} alt='Imagen de usuario' />
      <p>Nombre: {odontologoFavorito.name}</p>
      <p>User: {odontologoFavorito.username}</p>
      <BsFillTrashFill
        onClick={() => eliminarOdontologoFavorito(odontologoFavorito)}
      />
    </li>
  )
}
