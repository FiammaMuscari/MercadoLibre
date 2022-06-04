import React from "react";
import {Container} from "@chakra-ui/react";

import {filterAtributte} from "../product/filtro";
import data from "../product/mock";
interface Prop {
  name: string;
  color: string;
}
export const Table = ({name, color}: Prop) => {
  const {attributes} = data.product;
  const {principalChars} = filterAtributte(attributes);

  return (
    <Container>
      {principalChars.map((el) => {
        const condition = el.name === name;

        return condition ? (
          <tr key={el.name} className={color}>
            <th>
              <b>{el.name}</b>
            </th>
            <td>{el.value}</td>
          </tr>
        ) : null;
      })}
    </Container>
  );
};
