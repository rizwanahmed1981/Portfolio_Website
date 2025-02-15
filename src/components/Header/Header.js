import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/" className='logo'>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
      </Link>
    </Div1>
    <Div2>
    
      <li>
        <Link href="#projects" className='links'>
          Projects
        </Link>
      </li>

      <li>
        <Link href="#tech" className='links'>
          Technologies
        </Link>
      </li>        
      <li>
        <Link href="#about" className='links'>
          About
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/rizwanahmed1981" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/ahmed-rizwan-808909281/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/Imaginemoree/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
