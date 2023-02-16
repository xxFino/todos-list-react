import { FormContainer, Input, Button } from "./styled";
import { useState, useEffect, useRef } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        setNewTaskContent("");
        const trimmedContent = (newTaskContent.trim());
        if (trimmedContent) {
            addNewTask(trimmedContent);
        }
    };

    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </FormContainer>
    )
};

export default Form;