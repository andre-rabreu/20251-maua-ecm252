// rafce
import React from 'react'
import Accordion from './components/Accordion'

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
  return (
    <div>
      <Accordion items={items}/>
    </div>
  )
}

export default App