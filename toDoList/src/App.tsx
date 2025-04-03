import { useState } from 'react'

import  './app.css'
import ListTask from './components/listTask/ListTask'
import FormAdd from './components/formAdd/FormAdd'

function App() {

  type Titem ={
    id: number
    text: string
    category: string
    isCompleted: boolean
  }
  const [all , setAll] = useState<Titem[]>([

      {
        id: 1,
        text: "tarefa em casa",
        category: "pessoal",
        isCompleted: false
      },
      {
        id: 2,
        text: "Jogar",
        category: "diversão",
        isCompleted: false
      },
      {
        id: 3,
        text: "tarefa em trabalho",
        category: "Proficional",
        isCompleted: false
      },
      {
        id: 4,
        text: "dormir 18h",
        category: "Pessoal",
        isCompleted: false
      }

  ])

  function handleNewItem( text: string, category: string){

    let count:number = 0

    //  
    count = count + all.length + 1

    all.forEach( (item) =>{

      if(item.id == count){
        count++
      }


    } )

    const newList: any[] =  [...all, 
      {
      id: count,
      text: text.trim(),
      category,
      isCompleted: false
    }]

    setAll(newList)

  }


  function removeItem(id:number){
    const new_list =  all.filter( (item) =>{ return item.id !== id} )
    setAll(new_list)
    console.log(new_list)
  }

  function completedItem(id: number) {
    const new_list = all.map((item) => 
        item.id === id ? { ...item, isCompleted: true } : item
    );

    setAll(new_list);
    console.log(new_list);
}


  return (
    <section className='app'>
      <h1>Lista de Tarefa</h1>

     
      <ListTask list={all} onDelete={removeItem} completed={completedItem}/>
  
      <FormAdd addItem={handleNewItem}/>

    </section>
  )
}

export default App
