import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 74, text: 'Open Source Projects' },
  { number: 0, text: 'Github Followers' },
  { number: 0, text: 'Github Stars' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, i) => (
        <Box key={i}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
