import styled from "styled-components"

export const SectionContainer = styled.section`
    margin: 10px 0;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
    gap: 20px; 
    padding-bottom: 20px;   
    border-bottom: 1px solid #ddd;    

    @media(max-width: 767px) {    
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;