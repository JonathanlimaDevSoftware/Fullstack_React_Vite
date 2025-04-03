import styled from "styled-components";

const Components = styled.form`
    margin-top: 2.3rem;
    display: flex;
    flex-direction: column;
    gap: 10px;

    input{
        padding: 3px 10px;
        text-transform: capitalize;
    }
    fieldset{
        border: none;
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;
        select{
            margin-top: 5px;
            padding: 3px 10px;
        }
    }

    button{
        align-self: self-start;
    }

`

export { Components}