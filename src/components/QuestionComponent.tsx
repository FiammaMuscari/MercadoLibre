import React, {useRef} from "react";

import {form} from "./style.module.css";

interface Prop {
  change: (text: string) => void;
}

export const QuestionComponent = ({change}: Prop) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = ref.current?.value;
    const condition = value !== undefined;

    if (condition) {
      if (value.trim().length > 2) {
        change(value);
        ref.current!.value = "";
      }
    }
  };

  return (
    <form className={form} onSubmit={handleSubmit}>
      <textarea ref={ref} maxLength={2000} placeholder="Escribí tu pregunta..." rows={1} />
      <button type="submit">Preguntar</button>
    </form>
  );
};
