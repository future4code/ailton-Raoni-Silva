import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;
const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Lavar o Carro",
        completa: false,
      },
      {
        id: Date.now(),
        texto: "Limpar a casa",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id === this.state.id) {
      localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
    }
  }

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
      const dadosTarefa = localStorage.getItem("tarefas");
      const tarefasConvertidas = JSON.parse(dadosTarefa);
      this.setState({ id: tarefasConvertidas[0]?.id });
      this.setState({ texto: tarefasConvertidas[0]?.texto });
      this.setState({ completa: tarefasConvertidas[0]?.completa });
    }
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    // console.log('Adicionar tarefa)')
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novasTarefas = [novaTarefa, ...this.state.tarefas];
    this.setState({ tarefas: novasTarefas });
    this.setState({ inputValue: "" });
  };

  selectTarefa = (id) => {
    const tarefaDone = this.state.tarefas.map((job) => {
      if (id === job.id) {
        const novoJob = {
          ...job,
          completa: !job.completa,
        };
        return novoJob;
      } else {
        return job;
      }
    });

    this.setState({ tarefas: tarefaDone });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <Container className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </Container>
    );
  }
}

export default App;
