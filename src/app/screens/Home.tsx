import React from "react";
import {Stack, StackDivider} from "@chakra-ui/react";

import FirstComponent from "../../components/FirstComponent";

import {TablaPrincipal} from "./../../components/TablaPrincipal";
import {PrincipalGallery} from "./../../components/PrincipalGallery";
import {Carrousel} from "./../../components/Carrousel";
import {Description} from "./../../components/Description";
import {Opinions} from "./../../components/Opinions";
import {Sticky} from "./../../components/sticky";
const HomeScreen: React.FC = () => {
  return (
    <>
      <FirstComponent />

      <Stack backgroundColor="white" borderRadius="7px" direction="row" id="main" minWidth="1184px">
        <Stack
          backgroundColor="white"
          borderRadius="7px"
          divider={<StackDivider backgroundColor="blackAlpha.300" marginLeft="3em !important" />}
          id="izquierda"
          maxWidth="770px"
        >
          <PrincipalGallery />
          <Carrousel />
          <TablaPrincipal />
          <Description />
          <Opinions />
        </Stack>
        <Stack id="derecho">
          <Sticky />
        </Stack>
      </Stack>
    </>
  );
};

export default HomeScreen;
