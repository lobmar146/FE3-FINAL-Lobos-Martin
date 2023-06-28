import FormularioContacto from '../components/contact/FormularioContacto'
import { GiDirewolf } from 'react-icons/gi'
export default function Contact() {
  return (
    <section classname='section-contact transition-element'>
      <h1>
        Ponte en contacto con la manada <GiDirewolf className='h1' />{' '}
      </h1>
      <div className='contenedor-contact'>
        <FormularioContacto />
      </div>
    </section>
  )
}
