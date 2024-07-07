import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todos'
import Actor from './Actor'
import BookStore from './BookStore'

function App() {

  

  const books = [
    {id:1, name: 'Math', price: 100},
    {id:2, name: 'Biology', price: 120},
    {id:3, name: 'Literature', price: 130},
    {id:4, name: 'English', price: 150},
  ]

  const actors = ['Takwa', 'Taharat', 'Naznin', 'Guddo', 'Mahfuz']

  return (
    <>  
      <BookStore books={books}></BookStore>
      {/* <Actor name={'Ronaldo'}></Actor> */}
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      <h1>Vite + React</h1>
      <Student name="Asad" id='23'></Student>


      <Todo 
        task='Learn React'
        isDone = {false}
        ></Todo>
      <Todo 
        task='Learn Javascript'
        isDone= {true}
      ></Todo>

    </>
  )
}

function Student({name, id}){
  return(
    <h1>My name is: {name} & id: {id}</h1>
  )
}

export default App
