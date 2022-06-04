import {Container, Box, Image} from "@chakra-ui/react";
import React from "react";

const promos = [
  {
    id: 1,
    image: "https://http2.mlstatic.com/D_NQ_NP_794533-MLA48636400345_122021-O.webp",
    title: "2.390",
    content: "Chancho De Peluche Almohada Blandita",
  },
  {
    id: 2,
    image: "https://http2.mlstatic.com/D_Q_NP_909011-MLA46623286640_072021-AB.webp",
    title: "1.999",
    content: "Squishmallows Peluche Surtidos",
  },
  {
    id: 3,
    image: "https://http2.mlstatic.com/D_Q_NP_2X_623357-MLA44123719567_112020-AB.webp",
    title: "2.490",
    content: "Lechuza Búho Con Luces Y Sonido Rosa Celeste Beige 22x27cm",
  },
  {
    id: 4,
    image: "https://http2.mlstatic.com/D_Q_NP_2X_812266-MLA49030257808_022022-AB.webp",
    title: "1.590",
    content: "Peluche Stitch 20 Cm Importado Elegí Tu Modelo",
  },
];

export const Promoted = () => {
  return (
    <Container
      border="1px solid rgba(0,0,0,.1)"
      borderRadius="8px"
      margin="1em !important"
      width="90%"
    >
      <Box alignItems="end" display="flex" gap="0.5em" marginTop="2em">
        <Box fontSize="18px" fontWeight="400">
          Productos promocionados
        </Box>
        <Box color="#3483fa" cursor="pointer" fontSize="14px">
          Anunciá aquí
        </Box>
      </Box>
      <div>
        {promos.map((promos) => {
          return (
            <Box key={promos.id} display="flex" marginBottom="2em" marginTop="2em">
              <Image
                border="1px solid rgba(0,0,0,.07);"
                borderRadius="4px"
                height="82px"
                objectFit="contain"
                src={promos.image}
                width="82px"
              />

              <Box display="grid" paddingLeft="1em">
                <Box fontSize="20px" height="10px">
                  $ {promos.title}
                </Box>
                <Box fontSize="14px">{promos.content}</Box>
              </Box>
            </Box>
          );
        })}
      </div>
    </Container>
  );
};
