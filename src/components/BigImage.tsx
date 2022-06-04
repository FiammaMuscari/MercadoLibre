import {Stack, Image} from "@chakra-ui/react";
import React, {useRef} from "react";

interface Prop {
  img: string;
  changeSelect: (name: string) => void;
}
/*para que cambie segun la seleccion de la galeria*/
export const BigImage = ({img, changeSelect}: Prop) => {
  const refImg = useRef<HTMLImageElement>(null);

  const handlerClick = () => {
    changeSelect(img);
  };

  return (
    <Stack>
      <Stack
        _hover={{border: "2px solid #3483fa"}}
        border="1px solid rgba(0,0,0,.25)"
        border-radius="5px"
        borderRadius="4px"
        cursor="pointer"
        height="50px"
        /*2px solid #3483fa hover an click*/
        id="border"
        margin-bottom="8px"
        width="50px"
      >
        <Image
          ref={refImg}
          alt="stitch peluche"
          border="2px transparent solid"
          height="100%"
          objectFit="contain"
          padding="3px"
          src={img}
          width="100%"
          onClick={handlerClick}
        />
      </Stack>
    </Stack>
  );
};
