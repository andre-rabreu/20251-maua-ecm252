// rafce
import React from 'react'
import Accordion from './components/Accordion'
import Busca from './components/Busca'

const items = [
  {
    title: "Java",
    content: "Linguagem compilada e interpretada."
  },
  {
    title: "Python",
    content: "Linguagem interpretada e dinamicamente tipada."
  },
  {
    title: "Javascript",
    content: "Interpretada. Executa do lado do cliente e do lado do servidor também"
  }
]

const App = () => {
  const jsxExpression = <Busca />

  return (
    <div>
      {/* <Accordion items={items} /> */}
      <Busca />
    </div>
  )
}

export default App