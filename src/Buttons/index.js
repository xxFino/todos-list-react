import "./style.css";

const Buttons = ({ tasks, hideDone, toogleHideDone, setAllDone }) => (
    tasks.length > 0 && (
        <div className="additionalButtons">
            <button
                onClick={toogleHideDone}
                className="additionalButtons__button"
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                onClick={setAllDone}
                className="additionalButtons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
);


export default Buttons;