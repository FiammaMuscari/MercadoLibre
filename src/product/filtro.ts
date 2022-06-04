import {Attribute} from "./data";

export interface Info {
  name: string;
  value: string;
}

export const filterAtributte = (data: Attribute[]) => {
  const principalChars: Info[] = [];

  data.forEach((el) => {
    principalChars.push({
      name: el.name,
      value: el.value_name,
    });
  });

  return {principalChars};
};
