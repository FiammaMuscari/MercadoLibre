import React from "react";
import {Text, Stack, StackDivider} from "@chakra-ui/react";

const FirstComponent = () => {
  return (
    <>
      <Stack direction="row" fontSize="sm" padding={2}>
        <Text>
          <b>También puede interesarte: </b>
        </Text>
        <Text _hover={{cursor: "pointer"}}> peluches</Text>
      </Stack>
      <Stack direction="row" fontSize="sm" justifyContent="space-between" marginBottom="0.5em">
        <Stack>
          <Stack direction="row" divider={<StackDivider backgroundColor="blackAlpha.300" />}>
            <Text>Volver al listado</Text>
            <Stack alignItems="center" direction="row">
              <Text _hover={{cursor: "pointer", color: "#2968c8"}} color="#3483fa">
                Juegos y Juguetes
              </Text>
              <svg
                className="bi bi-chevron-right"
                fill="currentColor"
                height="11"
                viewBox="0 0 16 16"
                width="11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  fillRule="evenodd"
                />
              </svg>
              <Text _hover={{cursor: "pointer", color: "#2968c8"}} color="#3483fa">
                Peluches
              </Text>
              <svg
                className="bi bi-chevron-right"
                fill="currentColor"
                height="11"
                viewBox="0 0 16 16"
                width="11"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  fillRule="evenodd"
                />
              </svg>
              <Text _hover={{cursor: "pointer", color: "#2968c8"}} color="#3483fa">
                Stitch
              </Text>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Stack
            color="#3483fa"
            direction="row"
            divider={<StackDivider backgroundColor="blackAlpha.300" />}
            gap={2.5}
          >
            <Text _hover={{cursor: "pointer", color: "#2968c8"}}>Compartir</Text>
            <Text _hover={{cursor: "pointer", color: "#2968c8"}}>Vender uno igual</Text>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default FirstComponent;
