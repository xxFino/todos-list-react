import { List, Item, Content, ToggleDoneButton as ToggleDoneButton, RemoveTasksButton, StyledLink } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { removeTasks, selectHideDone, selectTaskByQuery, toggleTaskDone } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>
                    <Content done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <RemoveTasksButton
                        onClick={() => dispatch(removeTasks(task.id))}
                    >🗑️
                    </RemoveTasksButton>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;