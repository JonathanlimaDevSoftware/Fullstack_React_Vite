import * as C  from './styled'


type Tprops = {
    title:string
    description: string
}

const Item: React.FC<Tprops> = ( {title, description} ) =>{
    return(
       
        <C.Container>
            <h2 className='item__title'>{title}</h2>
            <p className='item__description'>
                {description}
            </p>

            <button className='btn btn__edit' type="button">Edit</button>
            <button className='btn btn__delete' type="button">Delete</button>
            <button className='btn btn__completed' type="button">Completed</button>
        </C.Container>
    )
}


export default Item