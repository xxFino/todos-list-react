import { NavLink } from "react-router-dom";
import styled from "styled-components"

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: activeClassName,
}))`
    &.${activeClassName} {
        font-weight: bold;
    }
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    color: white;
    font-size: 30px;
    text-decoration: none;
`;

export const StyledNavList = styled.ul`
    display: grid;
    justify-content: center;
    list-style: none;
    padding-left: 0px;
    margin-top: 0px;
    margin-left: 10px;
`;

export const StyledNavItem = styled.li`
    margin: 0px;
    padding-top: 20px;
    background: teal;
    width: 860px;
`;