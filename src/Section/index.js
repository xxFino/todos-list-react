import { SectionContainer, Header, H2 } from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <SectionContainer>
    <Header>
      <H2>{title}</H2>
      {extraHeaderContent}
    </Header>
    {body}
  </SectionContainer>
);

export default Section;