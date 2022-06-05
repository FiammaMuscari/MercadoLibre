import {Container, Box, Stack, StackDivider, Text} from "@chakra-ui/react";
import {RiMapPin2Line} from "react-icons/ri";
import React from "react";

import detail from "./../product/mock";

export const SellerInfo = () => {
  const {seller_address: address} = detail.product;
  const {city, state} = address;

  return (
    <Container
      border="1px solid rgba(0,0,0,.1)"
      borderRadius="8px"
      margin="1em !important"
      width="90%"
    >
      <Box>
        <Box fontSize="lg" fontWeight="bold" marginBottom="1.5em" marginTop="2em">
          Información sobre el vendedor
        </Box>
        <Box>
          <Box alignItems="baseline" display="flex" gap="0.5em" marginBottom="1em">
            <Box width="1em">
              <RiMapPin2Line style={{height: "auto", width: "100%"}} />
            </Box>
            <Box>
              <Box>
                <b>Ubicación</b>
              </Box>
              <Box>
                {city.name}, {state.name}
              </Box>
            </Box>
          </Box>
          <Box alignItems="baseline" display="flex" gap="0.5em">
            <Box width="1em">
              <img
                decoding="async"
                src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg"
                style={{height: "auto", width: "100%"}}
              />
            </Box>
            <Box>
              <Box color="#00a650" fontWeight="600">
                MercadoLíder Platinum
              </Box>
              <Box>¡Es uno de los mejores del sitio!</Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop="1.5em">
          <Box alignItems="center" display="flex" flex-direction="row" gap="0.5em">
            <Box bg="#fff0f0" h="10px" w="60px" />
            <Box bg="#fff5e8" h="10px" w="60px" />
            <Box bg="#fffcda" h="10px" w="60px" />
            <Box bg="#f1fdd7" h="10px" w="60px" />
            <Box bg="#39b54a" h="14px" w="60px" />
          </Box>
        </Box>
        <Stack
          alignItems="end"
          direction="row"
          divider={<StackDivider backgroundColor="blackAlpha.300" h="5em" />}
          justifyContent="space-between"
          marginTop="1.5em"
        >
          <Box>
            <Text align="center" fontSize="2em">
              347
            </Text>
            <Text align="center">Ventas en los últimos 60 días</Text>
          </Box>
          <Box>
            <Text align="center" fontSize="2em" margin="auto" maxWidth="35%" paddingBottom="0.1em">
              <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive.svg" />
            </Text>
            <Text align="center">Brinda buena atención</Text>
          </Box>
          <Box>
            <Text align="center" fontSize="2em" margin="auto" maxWidth="30%">
              <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive.svg" />
            </Text>
            <Text align="center">Despacha sus productos a tiempo</Text>
          </Box>
        </Stack>
        <Box
          _hover={{color: "#2968c8", cursor: "pointer"}}
          color="#3483fa"
          fontWeight="600"
          marginBottom="2em"
          marginTop="1em"
        >
          Ver más datos de este vendedor
        </Box>
      </Box>
    </Container>
  );
};
