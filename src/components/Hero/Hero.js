import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to
        <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>I'm a web developer with vast experience working in long enterprises projects</SectionText>
      <Button onClick={() => window.alert('Learn More!!!')}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
