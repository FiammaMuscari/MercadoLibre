import React from "react";
import {Container} from "@chakra-ui/react";

import {BuyNow} from "./buyNow";
import {SellerInfo} from "./sellerInfo";
import {Suscribe} from "./Subscribe";
import {Payments} from "./Payments";
import {Promoted} from "./Promoted";

export const Sticky = () => {
  return (
    <Container position="sticky" top="-35em">
      <BuyNow />
      <SellerInfo />
      <Suscribe />
      <Payments />
      <Promoted />
    </Container>
  );
};
