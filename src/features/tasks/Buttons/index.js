import { Button, StyledButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectHideDone, selectAreAllTasksDone, fetchExampleTasks, selectAreTasksEmpty } from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areAllTasksDone = useSelector(selectAreAllTasksDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const dispatch = useDispatch();
    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania!
            </Button>
            {!areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={areAllTasksDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </StyledButtons>
    )
};

export default Buttons;