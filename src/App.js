import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";
import { StyledNavLink, StyledNavItem, StyledNavList } from "./styled";

export default () => (
    <HashRouter>
        <nav>
            <StyledNavList>
                <StyledNavItem>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </StyledNavItem>
                <StyledNavItem>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </StyledNavItem>
            </StyledNavList>
            <Switch>
                <Route path={"/zadania/:id"}>
                    <TaskPage />
                </Route>
                <Route path={"/zadania"}>
                    <TasksPage />
                </Route>
                <Route path={"/autor"}>
                    <AuthorPage />
                </Route>
                <Route path={"/"}>
                    <Redirect to={"/zadania"} />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);