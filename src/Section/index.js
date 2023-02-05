import { SectionContainer, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionContainer>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    {body}
  </SectionContainer>
);

export default Section;