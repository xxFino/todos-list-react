import { DivComponent, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toogleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <DivComponent>
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
        </DivComponent>
    )
);

export default Buttons;