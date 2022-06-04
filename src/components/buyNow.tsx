import React, {useState} from "react";
import {IoMdHeartEmpty, IoMdHeart} from "react-icons/io";
import {AiFillStar, AiOutlineTrophy} from "react-icons/ai";
import {BiCheckShield} from "react-icons/bi";
import {Container, Box, Button} from "@chakra-ui/react";
import Select from "@atlaskit/select";

import details from "../product/mock";
//encontré las estrellitas despues (/u_u)
export const BuyNow = () => {
  const [corazon, setCorazon] = useState(false);

  const {title, sold_quantity: sales, price, initial_quantity: stock} = details.product;

  return (
    <Container border="1px solid rgba(0,0,0,.1)" borderRadius="8px" margin="1em" width="90%">
      <Box marginBottom="0.5em" marginTop="1.7em">
        Nuevo | {sales} vendidos
      </Box>
      <Box display="flex">
        <Box fontSize="22px" fontWeight="600">
          {title}
        </Box>
        <Box userSelect="none">
          {corazon ? (
            <IoMdHeart
              color={"#3483fa"}
              cursor="pointer"
              height="22px"
              size={"1.7rem"}
              width="100% !important"
              onClick={() => setCorazon(false)}
            />
          ) : (
            <IoMdHeartEmpty
              color={"#3483fa"}
              cursor="pointer"
              height="22px"
              size={"1.7rem"}
              width="100%!important"
              onClick={() => setCorazon(true)}
            />
          )}
        </Box>
      </Box>
      <Box alignItems="center" display="flex" height="3em" maxWidth="200px" width="100%">
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <AiFillStar color="#3483fa" />
        <Box marginLeft="1em" minWidth="100px">
          4 opiniones
        </Box>
      </Box>
      <Box>
        <Box fontSize="36px">${price}</Box>
        <Box fontSize="lg">en 1x {price}</Box>
      </Box>
      <Box
        _hover={{cursor: "pointer", color: "#2968c8"}}
        color="#5B9BFB"
        fontSize="sm"
        marginBottom="1.5em"
      >
        Ver todos los medios de pago
      </Box>
      <Box>
        <Box>
          <Box alignItems="flex-start" display="flex" gap="0.5em" marginBottom="1em">
            <Box>
              <svg
                className="icon icon-tabler icon-tabler-truck-delivery"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <circle color="#00a650" cx="7" cy="17" r="2" />
                <circle color="#00a650" cx="17" cy="17" r="2" />
                <path color="#00a650" d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                <line color="#00a650" x1="3" x2="7" y1="9" y2="9" />
              </svg>
            </Box>
            <Box>
              <Box color="#00a650">
                Llega gratis <b>hoy</b>
              </Box>
              <Box>Solo en CABA y zonas de GBA Comprando dentro de las próximas 8 h 50 min</Box>
              <Box _hover={{cursor: "pointer", color: "#2968c8"}} color="#3483fa">
                Ver más formas de entrega
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box alignItems="flex-start" display="flex" gap="0.5em" marginBottom="1em">
            <Box>
              <svg
                className="icon icon-tabler icon-tabler-arrow-back"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none" stroke="none" />
                <path color="#00a650" d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
              </svg>
            </Box>

            <Box>
              <Box color="#00a650">Devolución gratis</Box>
              <Box>Tenés 30 días desde que lo recibís.</Box>
              <Box _hover={{cursor: "pointer", color: "#2968c8"}} color="#3483fa">
                Conocer más
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box marginBottom="2em">
        <b>Stock disponible</b>
      </Box>
      <Box alignItems="center" display="flex" gap="0.5em" marginBottom="2em">
        <Box>
          <b>Cantidad</b>
        </Box>
        <Box width="140px">
          <Select
            className="single-select"
            classNamePrefix="react-select"
            inputId="single-select-example"
            options={[
              {label: "1 unidad", value: "1"},
              {label: "2 unidades", value: "2"},
              {label: "3 unidades", value: "3"},
              {label: "4 unidades", value: "4"},
              {label: "5 unidades", value: "5"},
            ]}
            placeholder={"1 unidad"}
          />
        </Box>
        <Box fontSize="15px">({stock} disponibles)</Box>
      </Box>
      <Box display="grid" gap="0.7em" marginBottom="1em" marginTop="1em">
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "#2968c8"}}
          backgroundColor="#3483fa"
          color="white"
          size="lg"
        >
          Comprar ahora
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgba(65,137,230,.2)"}}
          backgroundColor="rgba(65,137,230,.15)"
          color="#3483fa"
          size="lg"
        >
          Agregar al carrito
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgba(65,137,230,.15)"}}
          backgroundColor="white"
          color="#3483fa"
          size="lg"
        >
          Comprar con Mercado Crédito
        </Button>
        <Box>
          <Box display="flex" gap="0.5em" marginBottom="0.5em">
            <Box width="2em">
              <BiCheckShield style={{height: "auto", width: "100%"}} />
            </Box>
            <Box>
              <span style={{color: "#3483fa", cursor: "pointer"}}>Compra Protegida</span>
              <span> recibí el producto que esperabas o te devolvemos tu dinero.</span>
            </Box>
          </Box>
          <Box display="flex" gap="0.5em">
            <Box width="1em">
              <AiOutlineTrophy style={{height: "auto", width: "100%"}} />
            </Box>
            <Box>
              <span style={{color: "#3483fa", cursor: "pointer"}}>Mercado Puntos</span>{" "}
              <span>Sumás 22 puntos.</span>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
