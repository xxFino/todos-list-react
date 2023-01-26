import { FormContainer, Input, Button } from "./styled";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        setNewTaskContent("");
        const trimmedContent = (newTaskContent.trim());
        if(trimmedContent){
        addNewTask(trimmedContent);        
    }};

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}                
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </FormContainer>
    )
};

export default Form;