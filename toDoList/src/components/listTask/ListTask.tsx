
import { useState } from 'react';
import Search from '../search/Search';
import * as C from './listTask'
import Filter from '../filter/Filter';


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
    
  
    const [search, setSearch] = useState<string>('')
    const [ filter, setFilter] = useState<string>('')
    const [ sort, setSort] = useState<string>('')
    


    return (
        <C.Components>
            <Search search={search} setSearch={setSearch}/>
            
            <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
            

            {list
            .filter( (item)=> { return filter === 'all' ? true: filter === 'completed' ? item.isCompleted : !item.isCompleted })
            .filter( (item) =>( item.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ))
            .sort( (a,b) => sort === 'asc' ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text) )
            .map( (item)=> (
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
