import * as C  from './styled'


const Item: React.FC = () =>{
    return(
       
        <C.Container>
            <h2 className='item__title'>Title sit amet consectetur adipisicing</h2>
            <p className='item__description'>
            description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, repellat amet. Ipsum porro commodi odit facilis nobis suscipit possimus at dolor vitae. Eius aliquid accusamus, cum blanditiis odio cumque rem.
            </p>

            <button className='btn btn__edit' type="button">Edit</button>
            <button className='btn btn__delete' type="button">Delete</button>
            <button className='btn btn__completed' type="button">Completed</button>
        </C.Container>
    )
}


export default Item