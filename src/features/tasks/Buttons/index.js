import { Button, StyledButtons } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone, selectHideDone, selectAreAllTasksDone } from "../tasksSlice";

const Buttons = ({ }) => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const areAllTasksDone = useSelector(selectAreAllTasksDone);

    const dispatch = useDispatch();
    return (
        tasks.length > 0 && (
            <StyledButtons>
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
            </StyledButtons>
        )
    )
};

export default Buttons;