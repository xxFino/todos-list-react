import { Button, StyledButtons } from "./styled";

const Buttons = ({ tasks, hideDone, toogleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <StyledButtons>
            <Button
                onClick={toogleHideDone}                
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={setAllDone}                
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    )
);

export default Buttons;