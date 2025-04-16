import React from "react";
import { FaPlus } from "react-icons/fa";
import "./Form.css";

// tipagem das props usando TS

interface FormProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  novaTarefa: string;
}

export default function Form({
  handleChange,
  handleSubmit,
  novaTarefa,
}: FormProps) {
  // essa parte eu estou avisando para o codigo que a função recebe 3 argumentos e a tipagem esta definida no FormProps
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input onChange={handleChange} type="text" value={novaTarefa} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}
