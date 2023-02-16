import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/StyledContainer";
import { useTasks } from "../../useTasks";

function Tasks() {
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
          <TaskList tasks={tasks}
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

export default Tasks;