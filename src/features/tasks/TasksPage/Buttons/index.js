import { Button, StyledButtons } from "../../StyledTasksButtons";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectHideDone, selectAreAllTasksDone, selectAreTasksEmpty } from "../../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const areAllTasksDone = useSelector(selectAreAllTasksDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const dispatch = useDispatch();
    return (
        <StyledButtons>
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