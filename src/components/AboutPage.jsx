import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}

@media (max-width: 768px) {
  top: 6%;
  right: 5%;
  width: 28vw;
  opacity: 0.25;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  max-height: 65vh;
  z-index: 3;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: calc(0.65rem + 0.6vw);
  backdrop-filter: blur(4px);
  overflow-y: auto;
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 9rem;
  font-family: 'Ubuntu Mono', monospace;

  @media (max-width: 768px) {
    width: 86vw;
    left: 50%;
    transform: translateX(-50%);
    top: 5.5rem;
    padding: 1.2rem;
    max-height: 72vh;
    font-size: 0.82rem;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.text};
  }
`

const ResumeLink = styled.a`
  display: inline-block;
  margin-top: 1.2rem;
  padding: 0.6rem 1.4rem;
  border: 1px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  background-color: ${(props) => props.theme.text};
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.theme.text};
  }
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
<Box>

<LogoComponent theme='dark'/>
<SocialIcons theme='dark'/>
<PowerButton />
<ParticleComponent theme='dark' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
          <p>
            I'm a <strong>Software Engineer & Full-Stack Web Developer</strong> based in Bengaluru, India. I specialize in building responsive, high-performance web applications using React.js, Next.js, Node.js, and modern TypeScript.
          </p>
          <br/>
          <p>
            With professional experience at <strong>Athena Technology Solutions</strong> and <strong>Zibtek</strong>, I have a proven track record of boosting page load speeds by up to 35%, elevating search rankings by 25%, and engineering accessible (WCAG), SEO-optimized digital interfaces.
          </p>
          <br/>
          <p>
            I focus on Core Web Vitals optimization, scalable architectures, and clean code that balances user experience with business goals.
          </p>
          <ResumeLink href="/Ram_Prasath_Resume.pdf" target="_blank" rel="noreferrer" download="Ram_Prasath_Resume.pdf">
            📄 Download Full Resume
          </ResumeLink>
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>

        </ThemeProvider>
        
    )
}

export default AboutPage
