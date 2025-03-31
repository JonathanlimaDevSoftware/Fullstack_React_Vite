import styled from "styled-components";

const Container = styled.section`

    display: grid;
    padding: 15px 10px;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    row-gap: 20px;
    
    background-color: #454545;
    border-radius: 10px;


    .item__title{
        grid-column: 1/4;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1 ;
        
    };
    .item__description{
        
        grid-column: 1/4;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        overflow: hidden;
        -webkit-box-orient: vertical; 
        border-bottom: 2px solid #ccc;
    }
`

export   {Container}