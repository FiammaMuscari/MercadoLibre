import {Container, Box} from "@chakra-ui/react";
import React from "react";

export const Payments = () => {
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
          <Box fontSize="18px" marginTop="1em">
            Devolución gratis
          </Box>
          <Box color="rgba(0,0,0,.55)" fontSize="14px" marginTop="1.5em">
            Tenés 30 días desde que recibís el producto para devolverlo. ¡No importa el motivo!
          </Box>
          <Box
            _hover={{color: "#2968c8", cursor: "pointer"}}
            color="#3483fa"
            fontWeight="600"
            marginBottom="2em"
            marginTop="0.5em"
          >
            Conocer más sobre devoluciones
          </Box>
        </Box>
        <Box padding="0.8em">
          <Box fontSize="18px" fontWeight="600" marginTop="1em">
            Garantía
          </Box>
          <Box fontSize="16px" marginTop="1em">
            Compra Protegida con Mercado Pago
          </Box>
          <Box color="rgba(0,0,0,.55)" fontSize="14px" marginTop="0.5em">
            Recibí el producto que esperabas o te devolvemos tu dinero
          </Box>
          <Box fontSize="16px" marginTop="1em">
            Garantía del vendedor
          </Box>
          <Box color="rgba(0,0,0,.55)" fontSize="14px" marginTop="0.5em">
            Garantía del vendedor: 1 meses
          </Box>
          <Box
            _hover={{color: "#2968c8", cursor: "pointer"}}
            color="#3483fa"
            fontWeight="600"
            marginBottom="1em"
            marginTop="1.5em"
          >
            Conocer más sobre garantía
          </Box>
        </Box>
      </Box>
      <Box borderTop="1px solid rgba(0,0,0,.1)" padding="0.8em">
        <Box fontSize="18px" marginTop="1em">
          Medios de pago
        </Box>
        <Box fontSize="16px" marginTop="1em">
          Hasta 12 cuotas sin tarjeta
        </Box>
        <Box>
          <img
            alt="Mercado Crédito"
            decoding="async"
            src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg"
          />
        </Box>
        <Box fontSize="16px" marginTop="1em">
          Tarjetas de crédito
        </Box>
        <Box color="rgba(0,0,0,.55)" fontSize="14px">
          ¡Cuotas sin interés con bancos seleccionados!
        </Box>
        <Box display="flex" gap="1em" marginTop="0.5em">
          <Box>
            <img
              alt="Visa"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
            />
          </Box>
          <Box>
            <img
              alt="American Express"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg"
            />
          </Box>
          <Box>
            <img
              alt="Naranja"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg"
            />
          </Box>
          <Box>
            <img
              alt="Mastercard"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
            />
          </Box>
        </Box>
        <Box fontSize="16px" marginTop="1em">
          Tarjetas de débito
        </Box>
        <Box display="flex" gap="1em" marginTop="0.5em">
          <Box>
            <img
              alt="Visa Débito"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg"
            />
          </Box>
          <Box>
            <img
              alt="Maestro"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg"
            />
          </Box>
          <Box>
            <img
              alt="Mastercard Crédito"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg"
            />
          </Box>
          <Box>
            <img
              alt="Cabal Crédito"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg"
            />
          </Box>
        </Box>
        <Box fontSize="16px" marginTop="1em">
          Efectivo
        </Box>
        <Box display="flex" gap="1em" marginTop="0.5em">
          <Box>
            <img
              alt="Pago Facil"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg"
            />
          </Box>
          <Box>
            <img
              alt="Rapipago"
              decoding="async"
              src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg"
            />
          </Box>
        </Box>
        <Box
          _hover={{color: "#2968c8", cursor: "pointer"}}
          color="#3483fa"
          fontSize="14px"
          fontWeight="600"
          marginBottom="1em"
          marginTop="1em"
        >
          Conocé otros medios de pago
        </Box>
      </Box>
    </Container>
  );
};
