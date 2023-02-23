import { NavLink } from "react-router-dom";
import styled from "styled-components"

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName: activeClassName,
}))`
    &.${activeClassName} {
        font-weight: bold;
    }
    color: white;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid;
    }
`;

export const StyledNavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0px;
    margin: 0px;
    background: teal;
`;

export const StyledNavItem = styled.li`
    margin: 20px
`;