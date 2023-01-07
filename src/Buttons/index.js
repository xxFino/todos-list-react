import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    tasks.length > 0 && (
        <div className="additionalButtons">
            <button className="additionalButtons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone zadania
            </button>
            <button
                className="additionalButtons__button"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie zadania
            </button>
        </div>
    )
);


export default Buttons;