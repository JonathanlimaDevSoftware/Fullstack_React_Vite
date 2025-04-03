import React, { useState } from 'react'
import * as C from './formAddtask'

type Tprops = {
    
    addItem: (param: string, param2: string) => void; 
}



const FormAdd:React.FC<Tprops> = ({addItem} )=>{

    const [title, setTitle] = useState<string>('')
    const [category, setCategory] = useState<string>('')


    function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        if(!title || !category){
            alert('Preencha todos os campos')
        }else{


            addItem(title , category)
            console.log(title, category)
            setCategory("")
            setTitle("")
        }


    }



    return(
        <C.Components onSubmit={handleSubmit}>

            <h2>Create Task</h2>
            <input type="text" placeholder=' Text of task' value={title} onChange={(e)=>{ setTitle(e.target.value)}} />

            <fieldset>
                <label htmlFor="category"> Chooose a category</label>
                <select name="category" id="category" value={category} onChange={(e) =>{setCategory(e.target.value)}}>
                <option value="">Vazio</option>
                <option value="Pessoal"> Pessoal</option>
                <option value="Professonal"> Profissional</option>
                <option value="Funny"> Diversão</option>
                <option value="Exercise"> Exercise</option>
                <option value="Others"> Others</option>
                </select>
            </fieldset>


            <button  className='btn btn__submit' type="submit">Create</button>


        </C.Components>
    )
}


export default FormAdd;