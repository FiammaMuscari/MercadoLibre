import {Container, Box, Button, Wrap, Stack} from "@chakra-ui/react";
import React, {useState} from "react";

import {p} from "./style.module.css";
import {QuestionComponent} from "./QuestionComponent";

const initialState = [
  "Hola, tenés en rosa ??",
  "Hola Lo puedo a pasar a buscar hoy?",
  "Es exactamente como en la foto? Los ojos son diferentes en otras publicaciones.",
];

export const Description = () => {
  const [questions, setQuestions] = useState<string[]>(initialState);

  const changeState = (text: string) => {
    setQuestions([text, ...questions]);
  };

  return (
    <Container marginBottom="3em" maxWidth="718px">
      <Box fontSize="1.4em" fontWeight="400" paddingBottom="26px" paddingTop="40px">
        Descripción
      </Box>
      <Box color="666" fontSize="20px" fontWeight="400">
        Somos BaiBaoMarket!
        <br /> Vendemos productos Importados, para Minorita y Mayorista.
        <br />
        La mejor opción para Regalos, Bazar, Juguetes y Más!
        <br />
        <br />
        --------------------------------------------------
        <br /> Envío:
        <br /> <br />
        1, Podes retirar directo en Nuestro local.(Estamos en la Zona de Vicente López! A metros de
        la calle Maipu )<br /> 2, Mercado Envíos a todo el País
        <br /> 3, Moto Express Flex (Entrega dentro 24hs)
        <br /> <br />
        Nota: embalamos tu productos sin cargo adicional con todo lo necesario para que llegue en
        buenas condiciones.
        <br />
        <br />
        -------------------------------------------------- <br />
        Garantia <br />
        <br />- Merdiante Mercado Libre
        <br />- Acordar con el vendedor la garantia en el local
        <br />
        <br />
        -------------------------------------------------- <br />
        Horario de atencion:
        <br />
        <br /> - De Lunes a Sábados de 10am - 7pm
      </Box>
      <Box fontSize="1.5em" fontWeight="400" paddingTop="80px">
        Preguntas y respuestas
      </Box>
      <Box fontSize="1.2em" fontWeight="600" marginBottom="33px" marginTop="40px">
        ¿Qué querés saber?
      </Box>
      <Wrap align="center" direction="row" spacing={3}>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Costo y tiempo de envío
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Devoluciones gratis
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Medios de pago y promociones
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Garantía
        </Button>
      </Wrap>
      <Box fontSize="1.2em" fontWeight="600" marginTop="40px">
        Preguntale al vendedor
      </Box>
      <Stack direction="row">
        <QuestionComponent change={changeState} />
      </Stack>
      <Box>
        <Box fontSize="1.2em" fontWeight="600">
          Últimas realizadas
        </Box>
        {questions.map((el, i) => (
          <p key={i} className={p}>
            {el}
          </p>
        ))}
        <Box color="#296DCB" cursor="pointer" fontSize="sm">
          Ver todas las preguntas
        </Box>
      </Box>
    </Container>
  );
};
