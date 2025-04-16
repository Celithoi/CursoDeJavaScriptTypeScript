import React, { Component } from "react";
import Form from "./Form";
import Tarefas from "./Tarefas";
import "./Main.css";

export default class Main extends Component {
  state = {
    novaTarefa: "",
    tarefas: [],
    index: -1,
  };

  // copia os dados de local storage para meu app quando a pagina é montada
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem("tarefas"));
    if (!tarefas) return;

    this.setState({ tarefas });
  }
  // envia os meus arquivos para local storage depois de cada ação.
  componentDidUpdate(prevProps, PrevState) {
    const { tarefas } = this.state;
    if (tarefas === PrevState.tarefas) return;

    // console.log("As Tarefas mudaram", tarefas);

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }

  ////
  //// Tratando o Submit
  ////

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];
    // neste if é verificado se é uma nova tarefa o uma edição de valores ja adicionado
    if (index == -1) {
      // Aqui é colocado uma nova tarefa na lista de tarefas e apaga o que está dentro do input
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "",
      });
      // Aqui ja foi validado que não é colocar uma nova tarefa e sim editar a tarefa.
      // então editamos a novasTarefas[index], colocando o valor editado no index clicado
    } else {
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  };

  ////
  //// Tratando o change
  ////

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index);
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefa</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
          tarefas={tarefas}
        />
      </div>
    );
  }
}
