import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
         Hello Myself<br/>
         "Rizwan Ahmed"
        </SectionTitle>
        <SectionText>
        "As a passionate and versatile web developer, I bring expertise in both frontend and backend technologies to craft seamless and dynamic digital experiences. With a keen eye for design and a robust foundation in coding, I thrive in professional environments where innovation meets functionality. Committed to excellence, I love translating clients' visions into interactive solutions. Let me turn your ideas into captivating websites that not only meet but exceed expectations. Eager to contribute to a collaborative and forward-thinking team while making a positive impact through my skills and dedication."
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;