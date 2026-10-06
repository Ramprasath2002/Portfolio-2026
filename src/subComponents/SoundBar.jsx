import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useLocation } from 'react-router-dom'

import music from "../assets/audio/u-said-it-v13-1167.mp3"

const Box = styled.div`
display: flex;
align-items: center;
cursor: pointer;
position: fixed;
left: 6.2rem;
top: 2rem;
height: 2.5rem;
z-index: 10;

&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}

@media (max-width: 768px) {
    left: 4.2rem;
    top: 1rem;
    height: 2rem;
}
`

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}
`
const Line = styled.span`
background: ${props => props.$isDark ? '#FCF6BA' : props.theme.text};
border: 1px solid ${props => props.$isDark ? '#000000' : props.theme.body};

animation:${play} 1s ease infinite;
animation-play-state: ${props => props.$click ? "running" : "paused"};
height: 1.1rem;
width: 2px;
margin: 0 0.12rem;

@media (max-width: 768px) {
    height: 0.9rem;
    width: 2px;
    margin: 0 0.08rem;
}
`

const SoundBar = () => {
    const location = useLocation();
    const isDark = location.pathname === '/about' || location.pathname === '/work';

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }
    return (
        <Box onClick={() => handleClick()} title="Click to Play/Pause Music">
            <Line $isDark={isDark} $click={click}/>
            <Line $isDark={isDark} $click={click}/>
            <Line $isDark={isDark} $click={click}/>
            <Line $isDark={isDark} $click={click}/>
            <Line $isDark={isDark} $click={click}/>

            <audio src={music} ref={ref} loop />
        </Box>
    )
}

export default SoundBar
