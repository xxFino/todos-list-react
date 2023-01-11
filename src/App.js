import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "przejść na Reacta", done: false },
    { id: 2, content: "zjeść kolacje", done: true },
  ]);

  const removeTasks = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toogleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} removeTasks={removeTasks} />}
        extraHeaderContent={
          <Buttons tasks={tasks}
            hideDone={hideDone}
            toogleHideDone={toogleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
