import { SectionContainer, Header, H2 } from "./styled";

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