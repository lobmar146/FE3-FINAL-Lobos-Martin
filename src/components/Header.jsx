import { Link } from 'react-router-dom'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import { GiWolfHowl } from 'react-icons/gi'
import BotonCambiarTema from './BotonCambiarTema'
import { FaTooth } from 'react-icons/fa6'
export default function Header() {
  return (
    <header>
      <h1>
        <GiWolfHowl className='titulo logo' />
        <span className='titulo'> LOBOS</span> DENTAL{' '}
        <span className='titulo'>
          <FaTooth />
        </span>
      </h1>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/Contact'>Contact </Link>
        <Link to='/Favs'>Favoritos </Link>
        <BotonCambiarTema />
      </nav>
    </header>
  )
}
