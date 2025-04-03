import React, { useRef, useState } from 'react'
import * as C from './listTask'


type TaskItem = {
    id: number;
    text: string;
    category: string;
    isCompleted: boolean,
}

type PropsList = {
    list?: TaskItem[]; 
    onDelete: (id:number) => void; 
    completed: (id: number) => void;
}

const ListTask: React.FC<PropsList> = ({ list = [], onDelete,completed }) => {
    
  
    
    
    


    return (
        <C.Components>
            <h4>Suas listas</h4>

            {list.map(  (item)=> (
                <ul key={item.id}>

                <li>
                    <span>#{item.id}</span>
                    <h2 style={{ textDecoration: item.isCompleted ? 'line-through' : 'underline' }}>
                        {item.text}
                    </h2>
                    <p>{item.category}</p>

                    <div>
                    <button  
                    onClick={()=>{ completed(item.id) }} 
                    className={`btn btn__completed`} 
                    style={ item.isCompleted ? { cursor: 'not-allowed', opacity: 0.5 } : {} } 
                    type="button">Completed</button>
                    <button  onClick={()=>{ onDelete(item.id) }} className='btn btn__trash' type="button">Trash</button>
                    </div>
                </li>

                </ul>
            ) )}
        </C.Components>
    )
}

export default ListTask
