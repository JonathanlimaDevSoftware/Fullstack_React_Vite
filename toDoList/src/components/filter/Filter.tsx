import React from "react"
import * as C from './filter'

type Tfilter={
    filter: string
    setFilter: (params:string)=>void
    setSort: (params:string)=>void
    sort: string
}




const Filter:React.FC<Tfilter> = ({filter, setFilter, sort, setSort}) => {
    return(

        <C.Components>


            <div>
                <h3>Status:</h3>
                <select name="" id=""  value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="all" selected >All</option>
                    <option value="incompleted">incompleted</option>
                    <option value="completed">completed</option>
                </select>
            </div>

            <section>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort('asc')} className="btn btn__asc" type="button">Asc</button>
                <button  onClick={() => setSort('desc')} className="btn btn__desc" type="button" >Desc</button>
            </section>
        </C.Components>
    )
}

export default Filter