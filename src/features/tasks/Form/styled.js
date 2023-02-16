import styled from "styled-components";

export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;
    padding-top: 20px;

    @media(max-width: 767px) {    
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    border: none;
    color: white;
    padding: 10px;
    transition: 1s;

    &:hover {
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.2);
    }

    &:active {
        background-color: hsl(180, 100%, 40%);
    }
`;