import { List, Item, Content, ToggleDoneButton as ToggleDoneButton, RemoveTasksButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { removeTasks, selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
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
                        {task.id} - {task.content}
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