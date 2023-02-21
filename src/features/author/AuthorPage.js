import Header from "../../common/Header";
import Section from "../../common/Section";
import { Container } from "../../common/StyledContainer";

export default () => (
    <Container>
        <Header title="O autorze" />
        <Section
            title="Bartłomiej Snochowski"
            body={
                <p>Mieszkam na obrzeżach Kielc. Mam 24 lata i jestem
                studentem ostatniego semestru automatyki. Kurs traktuję
                jako coś poważnego, a sama wizja pracy w IT bardzo mnie interesuje i napędza
                do działania. Mam nadzieję, że wiele się jeszcze nauczę i koniec końców uda mi
                się pracować jako programista :)
            </p>
            }
        />
    </Container >
);