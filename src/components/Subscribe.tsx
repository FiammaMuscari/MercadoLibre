import {Container, Box, Image, Button} from "@chakra-ui/react";
import React from "react";

import disneysuscribete from "./../assets/disneysuscribete.jpg";

export const Suscribe = () => {
  return (
    <Container
      border="1px solid rgba(0,0,0,.1)"
      borderRadius="8px"
      margin="1em !important"
      padding="0"
      width="90%"
    >
      <Box>
        <Box borderBottom="1px solid rgba(0,0,0,.1)" fontWeight="600" padding="0.8em">
          ¡Suscribite al nivel 6 con 67% OFF!
        </Box>
        <Box padding="0.8em">
          <Image marginTop="1em" src={disneysuscribete} />
          <Box fontWeight="600" marginTop="1.5em">
            La oferta termina este mes
          </Box>
          <Box>
            Tu suscripción anual por $ 399/mes incluye Disney+, Star+, miles de descuentos en
            compras y ¡mucho más!
          </Box>
        </Box>
        <Box borderTop="1px solid rgba(0,0,0,.1)" padding="0.8em">
          <a href="https://www.disneyplus.com/es-ar" rel="noreferrer" target="_blank">
            <Button
              _focus={{border: "none"}}
              _hover={{backgroundColor: "rgba(65,137,230,.2)"}}
              backgroundColor="rgba(65,137,230,.15)"
              color="#3483fa"
              size="md"
              width="100%"
            >
              Suscribete al nivel 6
            </Button>
          </a>
        </Box>
      </Box>
    </Container>
  );
};
