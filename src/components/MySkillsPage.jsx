import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
min-height: 100vh;
height: auto;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;

@media (max-width: 768px) {
  flex-direction: column;
  padding: 5.5rem 0 4rem 0;
  gap: 2rem;
  overflow-y: auto;
  height: auto;
}
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 32vw;
min-height: 65vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}

@media (max-width: 768px) {
  width: 84vw;
  min-height: auto;
  height: auto;
  padding: 1.5rem;
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 0.8vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.55em + 0.5vw);
padding: 0.35rem 0;

${Main}:hover &{
    color:${props => props.theme.body};
}

strong{
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: block;
}
ul,p{
    margin-left: 1.5rem;
    line-height: 1.5;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
<Box>

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={36} height={36} /> Front-End & Performance
</Title>
<Description>
I specialize in building responsive, accessible (WCAG) and high-speed web apps with modern JavaScript and React/Next.js ecosystem.
</Description>
<Description>
<strong>Languages & Frameworks</strong>
<p>
JavaScript (ES6+), TypeScript, React.js, Next.js, HTML5, CSS3, SCSS/SASS, Bootstrap, Angular.js, Vue.js
</p>
</Description>
<Description>
<strong>Performance & Optimization</strong>
<p>
Core Web Vitals (LCP, FID, CLS), Code Splitting, Lazy Loading, Image Optimization, Responsive Design & Cross-Browser Compatibility
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={36} height={36} /> Full-Stack & Engineering
</Title>
<Description>
End-to-end web engineering, backend integration, API development, SEO automation, and continuous delivery.
</Description>
<Description>
<strong>Web Tech & Backend</strong>
<p>
Node.js, RESTful APIs, WordPress, Headless CMS (Ghost), Progressive Web Apps (PWA), Web Accessibility (WCAG), SQL Server
</p>
</Description>
<Description>
<strong>DevOps, SEO & Tools</strong>
<p>
Git, GitHub, GitLab, CI/CD, VS Code, Google Search Console, Google Analytics, Google Tag Manager (GTM), Schema Markup
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
