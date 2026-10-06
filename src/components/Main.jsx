import { motion } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'


const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
height: 100vh;
overflow:hidden;

position: relative;

h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}
`

const Container = styled.div`
padding: 2rem;

@media (max-width: 768px) {
  padding: 1rem;
}
`

const TopRightGroup = styled.div`
position: absolute;
top: 2rem;
right: calc(1rem + 2vw);
display: flex;
align-items: center;
gap: 1.5rem;
z-index: 1;

@media (max-width: 768px) {
  top: 1.1rem;
  right: 0.8rem;
  gap: 0.6rem;
}
`

const ResumeBtn = styled.a`
color: ${props => props.theme.text};
text-decoration: none;
border: 1.5px solid ${props => props.theme.text};
padding: 0.35rem 0.9rem;
border-radius: 20px;
font-family: 'Karla', sans-serif;
font-size: 0.95rem;
font-weight: 600;
transition: all 0.3s ease;

&:hover{
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
}

@media (max-width: 768px) {
  padding: 0.25rem 0.6rem;
  font-size: 0.78rem;
}
`

const Contact = styled.a`
color: ${props => props.theme.text};
text-decoration: none;

@media (max-width: 768px) {
  h2 {
    font-size: 0.95rem;
  }
}
`
const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: rotate(90deg) translate(-50%, -50%);
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
  right: 0.3rem;
  h2 {
    font-size: 1.05rem;
  }
}
`
const WORK = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};

position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg) ;
text-decoration: none;
z-index:1;

@media (max-width: 768px) {
  left: 0.3rem;
  h2 {
    font-size: 1.05rem;
  }
}
`

const BottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;

display: flex;
justify-content: space-evenly;

@media (max-width: 768px) {
  bottom: 0.8rem;
  h2 {
    font-size: 1.05rem;
  }
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index:1;
`
const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: ${props => props.$click ? '85%' :'50%'  };
left: ${props => props.$click ? '92%' :'50%'  };
transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: all 1s ease;

&>:first-child{
    animation: ${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.$click ? 'none' :'inline-block'  };
    padding-top: 1rem;
}

@media (max-width: 768px) {
  top: ${props => props.$click ? '88%' : '50%'};
  left: ${props => props.$click ? '88%' : '50%'};

  svg {
    width: ${props => props.$click ? '60px' : '120px'} !important;
    height: ${props => props.$click ? '60px' : '120px'} !important;
  }
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.$click ? '50%' : '0%'};
height: ${props => props.$click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`


const Main = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        const nextState = !click;
        setClick(nextState);

        if (nextState) {
            const elem = document.documentElement;
            if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen().catch(() => {});
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            }
        }
    };

    return (
        <MainContainer>
         <DarkDiv   $click={click}/>
            <Container>
            <PowerButton />
            <LogoComponent theme={click ? 'dark' :'light'}/>
            <SocialIcons theme={click ? 'dark' :'light'} />

            <Center $click={click} onClick={handleClick}>
                <YinYang width={click ? 120 : 200} height={click ? 120 : 200} fill='currentColor' />
                <span>click here</span>
            </Center>

            <TopRightGroup>
                <ResumeBtn href="/Ram_Prasath_Resume.pdf" target="_blank" rel="noreferrer" download="Ram_Prasath_Resume.pdf">
                    Resume
                </ResumeBtn>
                <Contact target="_blank" href="mailto:ramprasathdevelop@gmail.com">
                    <motion.h2
                    initial={{
                        y:-200,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    animate={{
                        y:0,
                        transition: { type:'spring', duration: 1.5, delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}
                    >
                        Say hi..
                    </motion.h2>
                </Contact>
            </TopRightGroup>
            <BLOG to="/blog">
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Blog
                </motion.h2>
            </BLOG>
            <WORK to="/work" $click={click}>
                <motion.h2
                initial={{
                    y:-200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    Work
                </motion.h2>
            </WORK>
            <BottomBar>
            <ABOUT to="/about" $click={click}>
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    About.
                </motion.h2>
            </ABOUT>
            <SKILLS to="/skills">
                <motion.h2
                initial={{
                    y:200,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                animate={{
                    y:0,
                    transition: { type:'spring', duration: 1.5, delay:1}
                }}
                 whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                >
                    My Skills.
                </motion.h2>
            </SKILLS>

            </BottomBar>

            </Container>
            {click ? <Intro click={click} /> : null }
        </MainContainer>
    )
}

export default Main
