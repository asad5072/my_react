import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Todo from './Todos'
import Actor from './Actor'

function App() {

  const actors = ['Takwa', 'Taharat', 'Naznin', 'Guddo', 'Mahfuz']

  return (
    <>   
      <Actor name={'Ronaldo'}></Actor>
      {
        actors.map(actor => <Actor name={actor }></Actor>)
      }

      <h1>Vite + React</h1>
      <Student name="Asad" id='23'></Student>


      {/* <Todo 
        task='Learn React'
        isDone = {false}
        ></Todo>
      <Todo 
        task='Learn Javascript'
        isDone= {true}
      ></Todo> */}

    </>
  )
}

function Student({name, id}){
  return(
    <h1>My name is: {name} & id: {id}</h1>
  )
}

export default App
