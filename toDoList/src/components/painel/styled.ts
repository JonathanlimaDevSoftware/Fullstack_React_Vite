import styled from 'styled-components'



const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 70px;
    padding: 15px 10px;
    background-color: #333333;
    border-radius: 10px;

    h1{
        text-align: center;
        
    }

    input{
        border: none;
        border-bottom: 1px solid #ccc;
        padding: 5px 10px;
        text-transform: capitalize;
        color: #ccc;
    }

    textarea{
        padding: 5px 10px;
        border: none;
        border-bottom: 1px solid #ccc;
        resize: vertical;
        color: #ccc;
        min-height: 100px;
        
    }

   
    
    
`


export { Container }