import { Button, StyledButtons } from "../../StyledTasksButtons";
import { fetchExampleTasks } from "../../tasksSlice";
import { useDispatch } from "react-redux";


const ExampleTasksButton = () => {
    const dispatch = useDispatch();

    return (
    <StyledButtons>
        <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania!
        </Button>
    </StyledButtons>
    )
};

export default ExampleTasksButton;