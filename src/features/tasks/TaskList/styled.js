import styled, { css } from "styled-components"

export const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
        display:none
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

const Button = styled.button`
    padding: 0px;
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    transition: 1s;
`;
export const ToggleDoneButton = styled(Button)`
    background-color: hsl(120, 100%, 30%);
   

        &:hover {
            background-color: hsl(120, 100%, 50%);
        }

        &:active {
            background-color: hsl(120, 100%, 50%);
        }    
`;   

  export const RemoveTasksButton = styled(Button)`
    background-color: hsl(0, 100%, 35%);
     

        &:hover {
            background-color: hsl(0, 100%, 50%);
        }

        &:active {
            background-color: hsl(0, 100%, 55%);
        }    
`;