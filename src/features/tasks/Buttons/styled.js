import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: hsl(180, 100%, 25%);
    border: none;
    margin: 0 0 0 20px;  
    transition: 1s;  

    @media(max-width: 767px) {    
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc
    }
`;