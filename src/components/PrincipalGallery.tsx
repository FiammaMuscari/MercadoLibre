import React, {useState} from "react";
import {Stack, Image} from "@chakra-ui/react";
import {Container} from "@chakra-ui/react";

import get from "../product/mock";

import {figure} from "./style.module.css";
import {BigImage} from "./BigImage";
/* falta check border de la galeria*/

export const PrincipalGallery = () => {
  const producto = get.product;

  const defaultImg = producto.pictures[0].url; /*imagenes mock*/
  const [selected, setSelected] = useState<string>(defaultImg);

  const changeSelect = (name: string) => {
    setSelected(name);
  };

  return (
    <Container marginLeft="0" width="65%">
      <Stack direction="row">
        <Stack height="35em" marginTop="1em" padding={0}>
          {producto.pictures.map((image) => {
            return <BigImage key={image.id} changeSelect={changeSelect} img={image.url} />;
          })}
        </Stack>
        <figure className={figure}>
          <Image
            alt="lilo y stitch"
            cursor="zoom-in"
            margin="auto"
            paddingLeft="3em"
            paddingTop="1em"
            src={selected}
          />
        </figure>
      </Stack>
    </Container>
  );
};
