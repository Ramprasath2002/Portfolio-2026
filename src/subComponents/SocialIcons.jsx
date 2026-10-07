import { motion } from "motion/react";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Github, Twitter, Facebook, YouTube, Linkedin } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    left: 0.6rem;
    & > *:not(:last-child) {
      margin: 0.25rem 0;
    }
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.$color === "dark" ? DarkTheme.text : DarkTheme.body};

  @media (max-width: 768px) {
    height: 2.2rem;
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/Ramprasath2002"}
          title="GitHub"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://www.linkedin.com/in/ramprasathdevelop"}
          title="LinkedIn"
        >
          <Linkedin
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"mailto:ramprasathdevelop@gmail.com"}
          title="Email"
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
      </motion.div>

      <Line
        $color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: typeof window !== 'undefined' && window.innerWidth <= 768 ? "2.2rem" : "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          backgroundColor: '#FF5500',
          boxShadow: '0 0 8px rgba(255, 85, 0, 0.7)',
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
