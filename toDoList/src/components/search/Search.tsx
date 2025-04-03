import React from 'react'
import * as C from './search'


type Tsearch={
    search: string
    setSearch: (param:string) => void
}




const  Search:React.FC<Tsearch> =({search, setSearch})=> {






  return (
        <C.Components>
            <h2>Pesquisa:</h2>
            <input type="search" name="" id="" value={search} 
            onChange={(e)=> setSearch(e.target.value)}
            placeholder='digite para pesquisar' />
        </C.Components>
    )
}

export default Search