import { motion } from "motion/react";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";

const Box = styled(motion.a)`
  width: calc(10rem + 15vw);
  max-width: 25rem;
  text-decoration: none;
  height: auto;
  min-height: 22rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    width: 82vw;
    max-width: 100%;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.$img})`};
  width: 100%;
  height: 11rem;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;
  border-radius: 2px;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;
const Title = styled.h3`
  color: inherit;
  padding: 0.6rem 0;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  font-size: calc(0.9rem + 0.3vw);
  line-height: 1.35;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;
const HashTags = styled.div`
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.5rem;
`;
const Tag = styled.span`
  font-size: 0.85rem;
  word-break: break-word;
`;
const Date = styled.span`
  padding: 0.3rem 0;
  font-size: 0.85rem;
  opacity: 0.8;
`;

const Container = styled(motion.div)``;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;
  return (
    <Container variants={Item}>
      <Box target="_blank" href={`${link}`}>
        <Image $img={imgSrc} />
        <Title>{name}</Title>
        <HashTags>
          {tags.map((t, id) => {
            return <Tag key={id}>#{t}</Tag>;
          })}
        </HashTags>
        <Date>{date}</Date>
      </Box>
    </Container>
  );
};

export default BlogComponent;
