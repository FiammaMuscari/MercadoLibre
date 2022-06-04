import React from "react";
import {Container, Box} from "@chakra-ui/react";
import {AiFillLinkedin, AiFillGithub, AiFillTwitterSquare} from "react-icons/ai";

const Footer = () => {
  return (
    <Container>
      <Box alignItems="center" display="flex" gap="0.5em" height="5em" justifyContent="center">
        <a href="https://www.linkedin.com/in/fiamma-muscari/" rel="noreferrer" target="_blank">
          <Box as={AiFillLinkedin} height="3em" width="100%" />
        </a>
        <a href="https://github.com/FiammaMuscari" rel="noreferrer" target="_blank">
          <Box as={AiFillGithub} height="3em" width="100%" />
        </a>
        <a href="https://twitter.com/_ninfuwu" rel="noreferrer" target="_blank">
          <Box as={AiFillTwitterSquare} height="3em" width="100%" />
        </a>
      </Box>
    </Container>
  );
};

export default Footer;
