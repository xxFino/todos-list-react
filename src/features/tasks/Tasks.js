import Buttons from "./Buttons";
import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/StyledContainer";

function Tasks() {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={
          <Buttons />
        }
      />
    </Container>
  );
}

export default Tasks;