import React from "react";
import "./Tarefas.css";
import { FaEdit, FaWindowClose } from "react-icons/fa";

interface FormProps {
  tarefas: string[];
  handleEdit: (e: React.MouseEvent, index: number) => void;
  handleDelete: (e: React.MouseEvent, index: number) => void;
}

export default function Tarefas({
  tarefas,
  handleEdit,
  handleDelete,
}: FormProps) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}
