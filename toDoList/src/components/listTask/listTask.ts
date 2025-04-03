import styled from "styled-components";



const Components = styled.section`

    display: flex;
    gap: 20px;
    flex-direction: column;
    
    li {
        list-style-type: none;
        display: grid;
        gap: 20px;
        border: 1px solid #434343;
        border-radius: 10px;
        padding: 10px;
        grid-template-areas: 
        "id id id"
        "title title button"
        "category category button";

        span{
            color: #777;
        }
        h2{
            font-size: 1.1rem;
            font-weight: 500;
            text-transform: capitalize;
            overflow: hidden;
            text-overflow: ellipsis;

            /* Estilização correta para limitar linhas de texto */
            display: -webkit-box;
            -webkit-line-clamp: 1; /* Define o número máximo de linhas */
            -webkit-box-orient: vertical;
        }
        p{
            text-transform: capitalize;
            font-size: .8rem;
            max-width: 100px;
            padding: 3px;
            background-color: white;
            border-radius: 10px;
            text-align: center;
            color: #434343;
        }
        div{
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: flex-end;
        }
    }

    span{grid-area: id;}
    h2{ grid-area: title;}
    p{grid-area: category; }
    div{grid-area: button;}

    @media screen  and (max-width: 381px){
        li {
            grid-template-areas: 
            "id id id"
            "title title title"
            "category category category"
            "button button button";
            
            div{
                
                justify-content: start !important;
            }
        }

    }



`

export  {Components}