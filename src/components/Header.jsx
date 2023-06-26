import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <h1>LOBOS DENTAL</h1>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/Contact'>Contact </Link>
        <Link to='/Favs'>Favoritos </Link>
      </nav>
    </header>
  )
}
