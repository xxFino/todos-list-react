import { Button, StyledButtons } from "../../StyledTasksButtons";
import { fetchExampleTasks, selectExampleTasksLoading } from "../../tasksSlice";
import { useDispatch, useSelector } from "react-redux";


const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectExampleTasksLoading)

    return (
    <StyledButtons>
        <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
            {
                loading ? "Trwa ładowanie..." : "Pobierz przykładowe zadania"
            }            
        </Button>
    </StyledButtons>
    )
};

export default ExampleTasksButton;