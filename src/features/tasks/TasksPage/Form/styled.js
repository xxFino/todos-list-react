import styled from "styled-components";

export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media(max-width: 767px) {    
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    border: none;
    color: white;
    padding: 10px;
    transition: 1s;
    height: 40.39px;
    margin-top: 20px;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.2);
    }

    &:active {
        background-color: hsl(180, 100%, 40%);
    }
`;