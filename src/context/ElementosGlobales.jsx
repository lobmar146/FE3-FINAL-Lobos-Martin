import { createContext, useState, useEffect } from 'react'

export const ElementosGlobales = createContext({})
export default function ElementosGlobalesProvider(props) {
  const { children } = props
  const [odontologos, setOdontologos] = useState([])

  async function getOdontologos() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setOdontologos(response)
  }

  const valoresGlobales = {
    odontologos
  }

  // ni bien carga, llamo al get para tener los odontologos de manera global
  useEffect(() => {
    getOdontologos()
  }, [])

  return (
    <ElementosGlobales.Provider value={valoresGlobales}>
      {children}
    </ElementosGlobales.Provider>
  )
}
