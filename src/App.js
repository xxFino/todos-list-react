import Buttons from "./Buttons";
import Form from "./Form";
import Tasks from "./Tasks";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";

function App() {
  const {
    tasks,
    removeTasks,
    toogleTaskDone,
    setAllDone,
    addNewTask,
    toogleHideDone,
    hideDone,
  } = useTasks();  

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks}
            hideDone={hideDone}
            removeTasks={removeTasks}
            toogleTaskDone={toogleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons tasks={tasks}
            hideDone={hideDone}
            toogleHideDone={toogleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;