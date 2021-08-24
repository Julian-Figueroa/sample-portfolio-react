import React from 'react';
import { DiReact, DiPostgresql } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a wide variety of technologies in the development department. From Backend to Frontend
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPostgresql size="3rem" />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
