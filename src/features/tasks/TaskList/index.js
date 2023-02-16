import { List, Item, Content, ToogleDoneButton, RemoveTasksButton } from "./styled";

const TaskList = ({ tasks, hideDone, removeTasks, toogleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <ToogleDoneButton                    
                    onClick={() => toogleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </ToogleDoneButton>
                <Content done={task.done}>
                    {task.id} - {task.content}
                </Content>
                <RemoveTasksButton                    
                    onClick={() => removeTasks(task.id)}
                >🗑️
                </RemoveTasksButton>
            </Item>
        ))}
    </List>
);

export default TaskList;