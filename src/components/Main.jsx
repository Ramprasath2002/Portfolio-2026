import { motion } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
import Intro from './Intro'

const rotate = keyframes`
from {
    transform: rotate(0);
}
to {
    transform: rotate(360deg);
}
`

const rotateOrbits = keyframes`
from {
    transform: translate(-50%, -50%) rotate(0deg);
}
to {
    transform: translate(-50%, -50%) rotate(360deg);
}
`

const rotateTilted = keyframes`
from {
    transform: translate(-50%, -50%) rotate(0deg);
}
to {
    transform: translate(-50%, -50%) rotate(360deg);
}
`

const starTwinkle = keyframes`
0%, 100% {
    transform: scale(1) rotate(0deg);
    opacity: 0.85;
    filter: drop-shadow(0 0 4px #FF7700) drop-shadow(0 0 10px rgba(255, 85, 0, 0.8));
}
50% {
    transform: scale(1.35) rotate(15deg);
    opacity: 1;
    filter: drop-shadow(0 0 8px #FF5500) drop-shadow(0 0 18px rgba(255, 120, 0, 0.95)) drop-shadow(0 0 28px rgba(255, 170, 0, 0.7));
}
`

const pulseGlow = keyframes`
0% {
    box-shadow: 0 0 35px rgba(255, 95, 0, 0.45), 0 0 75px rgba(255, 95, 0, 0.2);
}
50% {
    box-shadow: 0 0 55px rgba(255, 95, 0, 0.65), 0 0 100px rgba(255, 95, 0, 0.35);
}
100% {
    box-shadow: 0 0 35px rgba(255, 95, 0, 0.45), 0 0 75px rgba(255, 95, 0, 0.2);
}
`

const scrollBounce = keyframes`
0%, 100% {
    transform: translateY(0);
}
50% {
    transform: translateY(4px);
}
`

const MainContainer = styled.div`
background: ${props => props.theme.body};
width: 100vw;
max-width: 100%;
height: 100vh;
height: 100dvh;
overflow: hidden;
position: relative;
font-family: 'Karla', sans-serif;

h1, h2, h3, h4, h5, h6 {
 font-family: 'Pacifico', cursive;
  font-weight: 500;
}
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000000;
bottom: 0;
right: 50%;
width: ${props => props.$click ? '50%' : '0%'};
height: ${props => props.$click ? '100%' : '0%'};
z-index: 1;
transition: height 0.5s ease, width 1s ease 0.5s;
`

const Container = styled.div`
padding: 2rem;
height: 100%;
box-sizing: border-box;

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
z-index: 10;

@media (max-width: 768px) {
  top: 1rem;
  right: 0.8rem;
  gap: 0.6rem;
}
`

const ResumeBtn = styled.a`
color: ${props => props.theme.text};
text-decoration: none;
border: 1.5px solid ${props => props.theme.text};
padding: 0.38rem 1.05rem;
border-radius: 20px;
background: #FFFFFF;
font-family: 'Karla', sans-serif;
font-size: 0.92rem;
font-weight: 600;
display: inline-flex;
align-items: center;
gap: 0.45rem;
transition: all 0.3s ease;

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #FF5500;
  box-shadow: 0 0 6px rgba(255, 85, 0, 0.8);
}

&:hover {
    background-color: ${props => props.theme.text};
    color: ${props => props.theme.body};
}

@media (max-width: 768px) {
  padding: 0.25rem 0.65rem;
  font-size: 0.78rem;

  .dot {
    width: 5px;
    height: 5px;
  }
}
`

const Contact = styled.a`
color: ${props => props.theme.text};
text-decoration: none;
font-size: 1.05rem;
font-weight: 600;
display: inline-flex;
align-items: center;
gap: 0.25rem;

span.arrow {
  font-size: 1.1rem;
  transition: transform 0.25s ease;
}

&:hover span.arrow {
  transform: translate(2px, -2px);
}

@media (max-width: 768px) {
  font-size: 0.88rem;
  span.arrow {
    font-size: 0.92rem;
  }
}
`

const BLOG = styled(NavLink)`
color: ${props => props.theme.text};
position: absolute;
top: 50%;
right: calc(1rem + 2vw);
transform: translate(50%, -50%) rotate(90deg);
text-decoration: none;
z-index: 10;

h2 {
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.1;

  span.dot {
    color: #FF5500;
  }
}

@media (max-width: 768px) {
  right: 0.8rem;
  h2 {
    font-size: 1.45rem;
  }
}

@media (max-width: 380px) {
  h2 {
    font-size: 1.25rem;
  }
}
`

const WORK = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
position: absolute;
top: 50%;
left: calc(1rem + 2vw);
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration: none;
z-index: 10;
transition: color 0.5s ease;

h2 {
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.1;

  span.dot {
    color: #FF5500;
  }
}

@media (max-width: 768px) {
  left: 0.8rem;
  h2 {
    font-size: 1.45rem;
  }
}

@media (max-width: 380px) {
  h2 {
    font-size: 1.25rem;
  }
}
`

const RightScrollBar = styled.div`
position: fixed;
bottom: 1.5rem;
right: 2rem;
display: flex;
flex-direction: column;
align-items: center;
z-index: 10;
opacity: ${props => props.$click ? 0 : 1};
pointer-events: ${props => props.$click ? 'none' : 'auto'};
transition: opacity 0.5s ease;

.scroll-text {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #777777;
  transform: rotate(90deg);
  margin-top: 1.6rem;
  text-transform: uppercase;
}

.scroll-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #FF5500;
  box-shadow: 0 0 8px rgba(255, 85, 0, 0.8);
  margin-top: -3px;
}

@media (max-width: 768px) {
  display: none;
}
`

/* Floating Taglines (Visible when NOT clicked) */
const TaglineLeft = styled.div`
position: absolute;
top: 43%;
left: 23%;
transform: translateY(-50%);
display: flex;
flex-direction: column;
gap: 0.2rem;
z-index: 2;
pointer-events: none;
opacity: ${props => props.$click ? 0 : 1};
transition: opacity 0.4s ease;

.dot-line-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #FF5500;
  box-shadow: 0 0 6px rgba(255, 85, 0, 0.8);
}

.line {
  width: 28px;
  height: 2px;
  background-color: #FF5500;
}

h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #222222;
  line-height: 1.35;
  margin: 0;
}

@media (max-width: 1100px) {
  left: 17%;
}

@media (max-width: 860px) {
  display: none;
}
`

const TaglineRight = styled.div`
position: absolute;
top: 50%;
right: 23%;
transform: translateY(-50%);
display: flex;
flex-direction: column;
gap: 0.2rem;
z-index: 2;
pointer-events: none;
opacity: ${props => props.$click ? 0 : 1};
transition: opacity 0.4s ease;

.dot-line-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #FF5500;
  box-shadow: 0 0 6px rgba(255, 85, 0, 0.8);
}

.line {
  width: 28px;
  height: 2px;
  background-color: #FF5500;
}

h4 {
  font-size: 1.05rem;
  font-weight: 600;
  color: #222222;
  line-height: 1.35;
  margin: 0;
}

@media (max-width: 1100px) {
  right: 17%;
}

@media (max-width: 860px) {
  display: none;
}
`

/* Universal Cosmic Orbit Background Graphic */
const CosmicBackgroundGraphic = styled.div`
position: absolute;
top: 48%;
left: 50%;
transform: translate(-50%, -50%);
width: 480px;
height: 480px;
pointer-events: none;
z-index: 2;
opacity: ${props => props.$click ? 0 : 1};
transition: opacity 0.5s ease;

@media (max-width: 768px) {
  width: 320px;
  height: 320px;
  top: 46%;
}

@media (max-width: 420px) {
  width: 290px;
  height: 290px;
}
`

const RotatingOrbitRings = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 100%;
height: 100%;
animation: ${rotateOrbits} 50s linear infinite;
`

const TiltedOrbitRing = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 420px;
height: 170px;
border: 1.2px solid rgba(17, 17, 17, 0.32);
border-radius: 50%;
transform: translate(-50%, -50%);
pointer-events: none;
animation: ${rotateTilted} 25s linear infinite;

/* Orange planet node on top right */
&::before {
  content: '';
  position: absolute;
  top: 11px;
  right: 82px;
  width: 9px;
  height: 9px;
  background-color: #FF5500;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 85, 0, 0.9);
}

/* Black node on lower left */
&::after {
  content: '';
  position: absolute;
  bottom: 18px;
  left: 62px;
  width: 7px;
  height: 7px;
  background-color: #111111;
  border-radius: 50%;
  box-shadow: 0 0 8px #1a120fff, 0 0 14px rgba(16, 15, 14, 0.8);
}

@media (max-width: 768px) {
  width: 290px;
  height: 120px;

  &::before {
    top: 8px;
    right: 48px;
    width: 7px;
    height: 7px;
  }

  &::after {
    bottom: 14px;
    left: 45px;
    width: 6px;
    height: 6px;
  }
}
`

const SparkleStar = styled.div`
position: absolute;
top: 14%;
left: 17%;
font-size: 1.4rem;
color: #FF5500;
line-height: 1;
pointer-events: none;
user-select: none;
animation: ${starTwinkle} 2.2s ease-in-out infinite;

@media (max-width: 768px) {
  top: 10%;
  left: 14%;
  font-size: 1.15rem;
}
`

const SparkleStarBottom = styled(SparkleStar)`
top: auto;
bottom: 13%;
left: auto;
right: 18%;
animation: ${starTwinkle} 2.8s ease-in-out infinite 0.7s;

@media (max-width: 768px) {
  bottom: 11%;
  right: 15%;
}
`

/* Interactive Center Orb & Click Here Controller */
const Center = styled.button`
position: absolute;
top: ${props => props.$click ? '85%' : '48%'};
left: ${props => props.$click ? '92%' : '50%'};
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
z-index: 10;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
transition: top 1s ease, left 1s ease;

.halo {
  width: ${props => props.$click ? '120px' : '135px'};
  height: ${props => props.$click ? '120px' : '135px'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${props => props.$click ? 'none' : pulseGlow} 4s ease-in-out infinite;
  transition: all 0.5s ease;

  svg {
    animation: ${rotate} infinite 2s linear;
    transition: all 0.5s ease;
  }
}

&:hover .halo {
  transform: ${props => props.$click ? 'scale(1.1)' : 'scale(1.08)'};
}

.click-prompt {
  display: ${props => props.$click ? 'none' : 'flex'};
  flex-direction: column;
  align-items: center;
  margin-top: 0.8rem;
  transition: color 0.25s ease;
}

.click-text {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 2.2px;
  color: #111111;
  text-transform: lowercase;
}

&:hover .click-text {
  color: #FF5500;
}

.chevron {
  font-size: 0.75rem;
  color: #111111;
  line-height: 1;
  margin-top: 1px;
}

.dashed-stem {
  width: 1px;
  height: 22px;
  border-left: 1.2px dashed rgba(17, 17, 17, 0.45);
  margin-top: 2px;
}

.stem-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #FF5500;
  box-shadow: 0 0 6px rgba(255, 85, 0, 0.8);
}

@media (max-width: 768px) {
  top: ${props => props.$click ? 'calc(98% - 2.5rem)' : '46%'};
  left: ${props => props.$click ? 'calc(100% - 2rem)' : '50%'};

  .halo {
    width: ${props => props.$click ? '40px' : '96px'} !important;
    height: ${props => props.$click ? '40px' : '96px'} !important;

    svg {
      width: ${props => props.$click ? '38px' : '96px'} !important;
      height: ${props => props.$click ? '38px' : '96px'} !important;
    }
  }

  .click-text {
    font-size: 0.75rem;
    letter-spacing: 1.8px;
  }

  .mouse-pill {
    width: 14px;
    height: 21px;
  }

  .dashed-stem {
    height: 14px;
  }
}
`

/* Bottom Area: Universal cards (State 1: Before Click) */
const BottomSectionCards = styled.div`
position: absolute;
bottom: 2rem;
left: 0;
right: 0;
width: 100%;
padding: 0 calc(2rem + 3vw);
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items: flex-end;
z-index: 4;
opacity: ${props => props.$click ? 0 : 1};
pointer-events: ${props => props.$click ? 'none' : 'auto'};
transition: opacity 0.4s ease;

@media (max-width: 768px) {
  bottom: calc(0.8rem + env(safe-area-inset-bottom, 0px));
  padding: 0 1.2rem;
  gap: 1rem;
}
`

const CardSection = styled.div`
display: flex;
flex-direction: column;
max-width: 320px;

 

h2.card-title {
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.1;
  color: #111111;
  margin: 0;

  span.dot {
    color: #FF5500;
  }
}

p.card-desc {
  font-size: 0.84rem;
  line-height: 1.48;
  color: #555555;
  margin: 0.45rem 0 0.9rem 0;
}

@media (max-width: 768px) {
  max-width: 48%;

 

  h2.card-title {
    font-size: 1.45rem;
  }

  p.card-desc {
    display: none !important;
  }
}

@media (max-width: 380px) {
  h2.card-title {
    font-size: 1.25rem;
  }
}
`

const ActionPillBtn = styled(NavLink)`
background: #FAF7F2;
color: #111111;
border: 1.5px solid #111111;
padding: 0.48rem 1.3rem;
border-radius: 24px;
font-size: 0.86rem;
font-weight: 600;
text-decoration: none;
display: inline-flex;
align-items: center;
gap: 0.45rem;
width: fit-content;
transition: all 0.3s ease;

span.arrow {
  font-size: 0.95rem;
  transition: transform 0.25s ease;
}

&:hover {
  background: #111111;
  color: #FAF7F2;
  box-shadow: 0 6px 18px rgba(255, 85, 0, 0.25);
  transform: translateY(-2px);

  span.arrow {
    transform: translateX(3px);
  }
}

@media (max-width: 768px) {
  display: none !important;
}
`

const CardTitleLink = styled(NavLink)`
text-decoration: none;
color: inherit;
display: inline-block;
`

/* Classic Dual-Tone BottomBar when Clicked */
const ClassicBottomBar = styled.div`
position: absolute;
bottom: 1rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
z-index: 10;
opacity: ${props => props.$click ? 1 : 0};
pointer-events: ${props => props.$click ? 'auto' : 'none'};
transition: opacity 0.5s ease 0.3s;

h2 {
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1.1;

  span.dot {
    color: #FF5500;
  }
}

@media (max-width: 768px) {
  bottom: calc(0.8rem + env(safe-area-inset-bottom, 0px));
  justify-content: space-between;
  padding: 0 1.6rem;
  box-sizing: border-box;

  h2 {
    font-size: 1.45rem;
  }
}

@media (max-width: 380px) {
  h2 {
    font-size: 1.25rem;
  }
}
`

const ABOUT = styled(NavLink)`
color: ${props => props.$click ? props.theme.body : props.theme.text};
text-decoration: none;
z-index: 1;
transition: color 0.5s ease;
`

const SKILLS = styled(NavLink)`
color: ${props => props.theme.text};
text-decoration: none;
z-index: 1;

@media (max-width: 768px) {
  margin-right: 2.8rem;
}
`

const Main = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        if (!click) {
            const elem = document.documentElement;
            if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.mozFullScreenElement && !document.msFullscreenElement) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen().catch(() => {});
                } else if (elem.webkitRequestFullscreen) {
                    elem.webkitRequestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            }
        }
        setClick(!click);
    };

    return (
        <MainContainer>
            <DarkDiv $click={click} />

            <Container>
                <PowerButton />
                <LogoComponent theme={click ? 'dark' : 'light'} />
                <SocialIcons theme={click ? 'dark' : 'light'} />

                {/* Top Right Group */}
                <TopRightGroup>
                    <ResumeBtn
                        href="/Ram_Prasath_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Preview Resume"
                    >
                        <span className="dot" /> Resume
                    </ResumeBtn>
                    <Contact target="_blank" href="mailto:ramprasathdevelop@gmail.com">
                        Say hi. <span className="arrow">↗</span>
                    </Contact>
                </TopRightGroup>

                {/* Left Side: Work */}
                <WORK to="/work" $click={click}>
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Work<span className="dot">.</span>
                    </motion.h2>
                </WORK>

                {/* Right Side: Blog */}
                <BLOG to="/blog">
                    <motion.h2
                        initial={{
                            y: -200,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        animate={{
                            y: 0,
                            transition: { type: 'spring', duration: 1.5, delay: 1 }
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Blog<span className="dot">.</span>
                    </motion.h2>
                </BLOG>

                {/* Right Side: Scroll Indicator (Starting State) */}

                {/* Floating Taglines (Starting State) */}
                <TaglineLeft $click={click}>
                    
                    <h4>Crafting</h4>
                    <h4>Interfaces</h4>
                    <h4>that Scale</h4>
                 <div className="dot-line-group">
                        <div className="line" />
                        <div className="dot" />
                    </div>
                    
                </TaglineLeft>

                <TaglineRight $click={click}>
                    <div className="dot-line-group">
                        <div className="dot" />
                        <div className="line" />
                    </div>
                    <h4>Turning</h4>
                    <h4>Ideas into</h4>
                    <h4>Real Products</h4>
                </TaglineRight>

                {/* Cosmic Celestial Orbit Graphic (Starting State) */}
                <CosmicBackgroundGraphic $click={click}>
                    <RotatingOrbitRings>
                        <svg viewBox="0 0 480 480" width="100%" height="100%" style={{ overflow: 'visible' }}>
                            {/* Outer dashed circle */}
                            <circle
                                cx="240"
                                cy="240"
                                r="180"
                                fill="none"
                                stroke="rgba(17, 17, 17, 0.16)"
                                strokeWidth="1.2"
                                strokeDasharray="4 7"
                            />
                            {/* Inner dashed circle */}
                            <circle
                                cx="240"
                                cy="240"
                                r="130"
                                fill="none"
                                stroke="rgba(17, 17, 17, 0.22)"
                                strokeWidth="1.2"
                                strokeDasharray="4 6"
                            />
                            {/* Planetary Nodes */}
                            <circle
                                cx="240"
                                cy="60"
                                r="4.5"
                                fill="#FF5500"
                                style={{ filter: 'drop-shadow(0 0 5px #FF5500) drop-shadow(0 0 10px rgba(255, 85, 0, 0.85))' }}
                            />
                            <circle
                                cx="185"
                                cy="122"
                                r="3.5"
                                fill="#111111"
                                style={{ filter: 'drop-shadow(0 0 4px #111111) drop-shadow(0 0 8px rgba(39, 36, 34, 0.8))' }}
                            />
                            <circle
                                cx="345"
                                cy="317"
                                r="4"
                                fill="#111111"
                                style={{ filter: 'drop-shadow(0 0 4px #111111) drop-shadow(0 0 8px rgba(39, 36, 34, 0.8))' }}
                            />
                        </svg>
                    </RotatingOrbitRings>

                    <TiltedOrbitRing />
                    <SparkleStar>✦</SparkleStar>
                    <SparkleStarBottom>✦</SparkleStarBottom>
                </CosmicBackgroundGraphic>

                {/* Center Controller: Smooth Yin-Yang Orb */}
                <Center $click={click} onClick={handleClick} title={click ? "Close intro" : "Click to view intro"}>
                    <div className="halo">
                        <YinYang width={click ? 120 : 140} height={click ? 120 : 140} fill="currentColor" />
                    </div>

                    <div className="click-prompt">
                        <span className="click-text">click here</span>
                   
                    </div>
                </Center>

                {/* Universal Bottom Cards (State 1: Before Click) */}
                <BottomSectionCards $click={click}>
                    <CardSection>
                        <CardTitleLink to="/about">
                            <h2 className="card-title">
                                About<span className="dot">.</span>
                            </h2>
                        </CardTitleLink>
                        <p className="card-desc">
                            A Frontend Developer who loves building modern, scalable and beautiful web experiences.
                        </p>
                        <ActionPillBtn to="/about">
                            Know More <span className="arrow">→</span>
                        </ActionPillBtn>
                    </CardSection>

                    <CardSection style={{ alignItems: 'flex-end', textAlign: 'right' }}>
                        <CardTitleLink to="/skills">
                            <h2 className="card-title">
                                My Skills<span className="dot">.</span>
                            </h2>
                        </CardTitleLink>
                        <p className="card-desc">
                            Technologies and tools I use to bring ideas to life.
                        </p>
                        <ActionPillBtn to="/skills">
                            Explore Skills <span className="arrow">→</span>
                        </ActionPillBtn>
                    </CardSection>
                </BottomSectionCards>

                {/* Classic Dual-Tone BottomBar (State 2: After Click) */}
                <ClassicBottomBar $click={click}>
                    <ABOUT to="/about" $click={click}>
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            About<span className="dot">.</span>
                        </motion.h2>
                    </ABOUT>

                    <SKILLS to="/skills">
                        <motion.h2
                            initial={{
                                y: 200,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            animate={{
                                y: 0,
                                transition: { type: 'spring', duration: 1.5, delay: 1 }
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            My Skills<span className="dot">.</span>
                        </motion.h2>
                    </SKILLS>
                </ClassicBottomBar>
            </Container>

            {/* Split Intro Card with "Download Resume" in the content bottom (State 2) */}
            {click ? <Intro click={click} /> : null}
        </MainContainer>
    )
}

export default Main
