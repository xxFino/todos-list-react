import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTasks, toogleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    done
                    onClick={() => toogleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.id} - {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTasks(task.id)}
                >🗑️
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;