import React from 'react'
import styled, { keyframes } from 'styled-components'
import {motion} from 'motion/react'
import Me from '../assets/Images/profile-img.png'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 68vw;
height:60vh;
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


    z-index:1;

@media (max-width: 768px) {
    width: 88vw;
    height: 60vh;
}
`

const floatPic = keyframes`
0% {
    transform: translate(-50%, 0px);
}
50% {
    transform: translate(-50%, -15px);
}
100% {
    transform: translate(-50%, 0px);
}
`

const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;

.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: auto;
    max-width: 108%;
    height: 114%;
    object-fit: contain;
    object-position: bottom center;
    animation: ${floatPic} 3.5s ease-in-out infinite;

    @media (max-width: 768px) {
        max-width: 125%;
        height: 112%;
    }
}
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

h1{
    font-size: calc(1.8rem + 1.5vw);
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
}

h3{
    font-size: calc(1.1rem + 1.2vw);
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
}

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.8)` };
    font-size: calc(0.55rem + 0.8vw);
    font-weight: 400;
    line-height: 1.4;

    @media (max-width: 768px) {
        font-size: 0.65rem;
        line-height: 1.35;
    }
}

@media (max-width: 768px) {
    padding: 0.8rem;
}
`

const Intro = () => {
    return (
        <Box
        initial={{height:0}}
        animate={{height: '60vh'}}
        transition={{ type: 'spring', duration:1.5, delay:0.2 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Ram Prasath.</h3>
                    <h6>Software Engineer & Full-Stack Web Developer building high-performance, accessible, and SEO-optimized web applications with React, Next.js & Node.js.</h6>
                </Text>
            </SubBox>
            <SubBox>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1}}
                transition={{ duration:1, delay:0.4 }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
                >
                    <img className="pic" src={Me} alt="Ram Prasath" />
                </motion.div>
            </SubBox>
        </Box>
    )
}

export default Intro
