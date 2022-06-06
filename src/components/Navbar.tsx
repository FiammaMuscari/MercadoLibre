import React from "react";
import {
  Container,
  Stack,
  Box,
  Image,
  Input,
  Icon,
  useDisclosure,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {GrLocation} from "react-icons/gr";
import {BsCart2} from "react-icons/bs";
import {Menu, MenuButton, MenuList, MenuItem, MenuGroup} from "@chakra-ui/react";

import logo from "../assets/logo.png";
import disneypromo from "../assets/disneypromo.webp";
import suscribete from "../assets/suscribete.jpg";
import Routes from "../app/routes";

const Navbar = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" minWidth="1184px" paddingTop="0.50em">
        <Container maxWidth="container.xl">
          <Stack height="6em" marginBottom="3px" spacing={0}>
            <Stack
              direction={{base: "column", md: "row"}}
              /* responsive sin mediaquerys  */ justifyContent="space-between"
            >
              <Stack direction="row" flex={1} spacing={9}>
                <a href="https://www.mercadolibre.com.ar" rel="noreferrer" target="_blank">
                  <Image
                    _hover={{cursor: "pointer"}}
                    height="2rem"
                    objectFit="contain"
                    src={logo}
                  />
                </a>
                <Stack
                  alignItems="center"
                  backgroundColor="white"
                  boxShadow="md"
                  direction="row"
                  divider={<StackDivider backgroundColor="blackAlpha.300" />}
                  maxWidth={600}
                  padding={2}
                  rounded="base"
                  width="100%"
                >
                  <Input
                    _placeholder={{color: "blackAlpha.500"}}
                    height="1em"
                    paddingX={2}
                    placeholder="Buscar productos, marcas y más..."
                    size="lg"
                    type="text"
                    variant="unstyled"
                  />
                  <Button
                    _focus={{border: "none"}}
                    background="white!important"
                    height={1}
                    margin={"-0.25em"}
                    width={1}
                  >
                    <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
                  </Button>
                </Stack>
              </Stack>
              <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={3}>
                <a href="https://www.disneyplus.com/es-ar" rel="noreferrer" target="_blank">
                  <Image
                    _hover={{cursor: "pointer"}}
                    display={{base: "none", md: "flex"}}
                    height="39px"
                    objectFit="contain"
                    src={disneypromo}
                  />
                </a>
              </Stack>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Stack
                _hover={{outline: "1px solid RGBA(0, 0, 0, 0.08)", cursor: "pointer"}}
                alignItems="flex-start"
                borderRadius="0.25em"
                direction="row"
                marginBottom="0.5em"
                padding="0.20em"
                spacing={1}
              >
                <Icon as={GrLocation} height={6} width={6} />
                <Stack fontSize="sm">
                  <a>
                    <span color="blackAlpha.700">Enviar a</span>
                    <br />
                    <span>Capital Federal</span>
                  </a>
                </Stack>
              </Stack>
              <Stack alignItems="center" direction="row" fontSize="sm">
                <Stack
                  alignItems="flex-end"
                  color="blackAlpha.700"
                  direction="row"
                  marginLeft="1em"
                  paddingRight="15em"
                >
                  <Menu isOpen={isOpen}>
                    <MenuButton
                      _focus={{border: "none"}}
                      alignItems="center"
                      as={Button}
                      display="flex"
                      fontSize="sm"
                      height={5}
                      rightIcon={
                        <svg
                          fill="currentColor"
                          height="1em"
                          stroke="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            clipRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            fillRule="evenodd"
                          />
                        </svg>
                      }
                      variant="unstyled"
                      onClick={onOpen}
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                    >
                      Categorías
                    </MenuButton>
                    <MenuList
                      backgroundColor="#333"
                      border="none"
                      color="white"
                      marginTop="6px"
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                    >
                      <Stack justifyContent="center" paddingY="1em">
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Vehiculos
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Inmuebles
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Supermercado
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Hogar y Muebles
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Electrodomésticos
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Herramientas
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Construccion
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Deportes y Fitness
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Accesorios para Vehículos
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Moda
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Juegos y Juguetes
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Bebés
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Belleza y Cuidado Personal
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Salud y Equipamento Médico
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Industrias y Oficinas
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Agro
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Productos Sustentables
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Servicios
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Más vendidos
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Tiendas oficiales
                        </MenuItem>
                        <MenuItem _hover={{bg: "#3483fa"}} paddingLeft="2em">
                          Ver más categorías
                        </MenuItem>
                      </Stack>
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuGroup>
                      <Stack direction="row" spacing={4}>
                        <MenuButton _hover={{color: "blackAlpha.900"}}>Ofertas</MenuButton>
                        <MenuButton _hover={{color: "blackAlpha.900"}}>Historial</MenuButton>
                        <MenuButton _hover={{color: "blackAlpha.900"}}>Supermercado</MenuButton>
                        <MenuButton _hover={{color: "blackAlpha.900"}}>Moda</MenuButton>
                        <MenuButton _hover={{color: "blackAlpha.900"}}>Vender</MenuButton>
                        <MenuButton _hover={{color: "blackAlpha.900"}}>Ayuda</MenuButton>
                      </Stack>
                    </MenuGroup>
                  </Menu>
                </Stack>
                <Menu>
                  <MenuGroup>
                    <Stack direction="row" spacing={4} width="max-content">
                      <MenuButton>Crea tu cuenta</MenuButton>
                      <MenuButton>Ingresá</MenuButton>
                      <MenuButton>Mis compras</MenuButton>
                      <MenuButton>
                        <Icon as={BsCart2} height={5} width={5} />
                      </MenuButton>
                    </Stack>
                  </MenuGroup>
                </Menu>
              </Stack>
            </Stack>
          </Stack>
        </Container>
        <Box display="contents">
          <a href="https://www.disneyplus.com/es-ar" rel="noreferrer" target="_blank">
            <Image
              _hover={{cursor: "pointer"}}
              height="90px"
              objectFit="cover"
              src={suscribete}
              w="100%"
            />
          </a>
        </Box>
      </Box>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
        <Routes />
      </Container>
    </Stack>
  );
};

export default Navbar;
