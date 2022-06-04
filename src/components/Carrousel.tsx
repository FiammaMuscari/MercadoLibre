import {Stack, Image, Box, Text, Container} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

import {swipperBtnPrev, swipperBtnNext, swipper, containerSwiper} from "./style.module.css";

export const Carrousel = () => {
  useEffect(() => {
    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");

    prevBtn?.classList.add(swipperBtnPrev);
    nextBtn?.classList.add(swipperBtnNext);
  }, []);

  return (
    <Container className={containerSwiper} maxW="55em" width="90%" zIndex="0">
      <Box fontSize="1.5em" marginBottom="0.7em" marginTop="1em">
        Publicaciones del vendedor
      </Box>
      <Swiper
        className={swipper}
        loop={true}
        modules={[Navigation]}
        navigation={true}
        scrollbar={{draggable: true}}
        slidesPerGroup={2}
        slidesPerView={3}
        spaceBetween={1}
      >
        <Stack>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="peluche"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://http2.mlstatic.com/D_Q_NP_827356-MLA44646536101_012021-AB.webp"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $13.200
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Peluche Stich 80cm Sentado Lilo Disney Importado
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="peluche"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://http2.mlstatic.com/D_Q_NP_600144-MLA49547774253_042022-AB.webp"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $3.190
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Peluche Stitch 30cm Importado Lilo Y Stitch Hermosos Suaves
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="peluche"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://http2.mlstatic.com/D_Q_NP_778525-MLA46397186740_062021-AB.webp"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $1.1150
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="peluche"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://http2.mlstatic.com/D_Q_NP_603500-MLA47487564153_092021-AB.webp"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $1.290
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Peluche Pokemon Varios Personajes Principales
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="peluche"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://http2.mlstatic.com/D_Q_NP_958158-MLA47702833659_092021-AB.webp"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $1.090
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Peluche Patrulla Canina Compatible Con Paw Patrol
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="peluche"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://http2.mlstatic.com/D_Q_NP_960733-MLA49307498853_032022-AB.webp"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $5.670
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">Peluche Oso Escandaloso 30cm Combo X3u</Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="peluche"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://http2.mlstatic.com/D_Q_NP_807710-MLA46397647037_062021-AB.webp"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $1.290
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Baby Yoda Peluche 20cm Importado Star Wars
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
        </Stack>
      </Swiper>
      <Box _hover={{cursor: "pointer"}} color="#1259c3" marginBottom="1.5em">
        ver más publicaciones del vendedor
      </Box>
    </Container>
  );
};
