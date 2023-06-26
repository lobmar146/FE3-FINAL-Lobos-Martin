import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer>
      <p>
        <span className='titulo'>Powered By </span>Lobos Martín
      </p>
      <a href='https://www.linkedin.com/in/mart%C3%ADn-lobos' target='blank'>
        <span className='titulo'>
          <BsLinkedin />
        </span>
      </a>
    </footer>
  )
}
