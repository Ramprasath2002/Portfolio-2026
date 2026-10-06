import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'motion/react'
import Me from '../assets/Images/profile-img.png'

const floatPic = keyframes`
0% {
    transform: translate(-50%, 0px);
}
50% {
    transform: translate(-50%, -10px);
}
100% {
    transform: translate(-50%, 0px);
}
`

const Box = styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);

width: 68vw;
height: 60vh;
display: flex;

background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
background-repeat: no-repeat;
background-size: 100% 2px;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.text};

z-index: 2;

@media (max-width: 768px) {
    width: 76vw;
    height: 54vh;
}

@media (max-width: 480px) {
    width: 74vw;
    height: 52vh;
}
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: auto;
    max-width: 105%;
    height: 112%;
    object-fit: contain;
    object-position: bottom center;
    animation: ${floatPic} 3.5s ease-in-out infinite;

    @media (max-width: 768px) {
        max-width: 100%;
        height: 96%;
    }
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: default;

display: flex;
flex-direction: column;
justify-content: space-evenly;
font-family: 'Karla', sans-serif;

h1 {
    font-size: calc(1.8rem + 1.5vw);
    font-weight: 700;
    line-height: 1.1;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }

    @media (max-width: 380px) {
        font-size: 1.1rem;
    }
}

h3 {
    font-size: calc(1.1rem + 1.2vw);
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 0.88rem;
    }

    @media (max-width: 380px) {
        font-size: 0.8rem;
    }
}

& > p {
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.85)`};
    font-size: calc(0.55rem + 0.8vw);
    font-weight: 400;
    line-height: 1.45;

    @media (max-width: 768px) {
        font-size: 0.58rem;
        line-height: 1.3;
    }

    @media (max-width: 380px) {
        font-size: 0.52rem;
        line-height: 1.22;
    }
}

@media (max-width: 768px) {
    padding: 0.6rem 0.5rem;
}
`

const ResumeDownloadBtn = styled.a`
display: inline-flex;
align-items: center;
gap: 0.45rem;
width: fit-content;
margin-top: 0.6rem;
padding: 0.5rem 1.2rem;
border: 1.5px solid ${props => props.theme.body};
border-radius: 20px;
color: ${props => props.theme.body};
background-color: transparent;
font-family: 'Karla', sans-serif;
font-size: 0.88rem;
font-weight: 600;
text-decoration: none;
transition: all 0.3s ease;
cursor: pointer;

&:hover {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.45);
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    margin-top: 0.4rem;
    padding: 0.32rem 0.75rem;
    font-size: 0.72rem;
}

@media (max-width: 380px) {
    margin-top: 0.25rem;
    padding: 0.25rem 0.65rem;
    font-size: 0.66rem;
}
`

const Intro = () => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: isMobile ? '52vh' : '60vh' }}
            transition={{ type: 'spring', duration: 1.5, delay: 0.2 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Ram Prasath.</h3>
                    <p>
                        Software Engineer & Full-Stack Web Developer building high-performance, accessible, and SEO-optimized web applications with React, Next.js & Node.js.
                    </p>
                    <ResumeDownloadBtn
                        href="/Ram_Prasath_Resume.pdf"
                        target="_blank"
                        rel="noreferrer"
                        download="Ram_Prasath_Resume.pdf"
                        title="Download Ram Prasath's Resume"
                    >
                        Download Resume 
                    </ResumeDownloadBtn>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                    <img className="pic" src={Me} alt="Ram Prasath" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
