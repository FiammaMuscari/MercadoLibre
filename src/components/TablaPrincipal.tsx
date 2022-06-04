import React from "react";
import {Container} from "@chakra-ui/react";

import {Table} from "./tabla";
import {container, table, dark, light, otros, principales, otrascarac} from "./style.module.css";

export const TablaPrincipal = () => {
  return (
    <Container className={container} maxWidth="718px">
      <h2 className={principales}>Características principales</h2>
      <table className={table}>
        <tbody>
          <Table color={dark} name="Marca" />

          <Table color={light} name="Modelo" />

          <Table color={dark} name="Franquicia" />

          <Table color={light} name="Animal" />

          <Table color={dark} name="Personaje" />
        </tbody>
      </table>

      <p className={otrascarac}>Otras características</p>
      <div>
        <div className={otros}>
          <p>
            <span>Material: </span>
            Plush
          </p>
          <p>
            <span>Altura x Ancho: </span>
            100 cm x 50 cm
          </p>
        </div>
        <p>
          <span>
            <b>Es material hipoalergénico: </b>
          </span>
          No
        </p>
      </div>
    </Container>
  );
};
