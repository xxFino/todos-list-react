import { List, Item, Content, ToggleDoneButton as ToggleDoneButton, RemoveTasksButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { removeTasks, selectHideDone, selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
    const tasks = useSelector(selectTasks);
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
                        {task.content}
                    </Content>
                    <RemoveTasksButton
                        onClick={() => dispatch(removeTasks(task.id))}
                    >🗑️
                    </RemoveTasksButton>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;