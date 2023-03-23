import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Terminar as aulas de React no DevClub" }])

  const inputValue = (event) => {
    console.log(event.target.value)
    setList([{ id: uuid(), task: event.target.value } ])
  }

  const buttonClick = () => {
    console.log('Clicado')
  }

  return (
    <div>
      <input onChange={inputValue} placeholder="O que tenho que fazer..." />
      <button onClick={buttonClick}>Adicionar</button>

      <ul>{
        list.map(item => (
          <li key={item.id}>{item.task}</li>
        ))
      }
      </ul>
    </div>

  )
}

export default App
