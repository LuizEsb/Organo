import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvarTime = (evento) => {
    evento.preventDefault();
    props.cadastrarTime({ nome: nomeTime, cor: corTime });
    setNomeTime("");
    setCorTime("");
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <Campo
          obrigatorio={true}
          placeholder="Digite o nome"
          label="Nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          placeholder="Digite o cargo"
          label="Cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <Campo
          placeholder="Digite o endereço da imagem"
          label="Imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
          obrigatorio={true}
          label="Time"
          itens={props.times}
        />
        <Botao>Criar card</Botao>
      </form>
      <form onSubmit={aoSalvarTime}>
        <h2>Preencha os dados para criar um novo time</h2>
        <Campo
          obrigatorio
          placeholder="Digite o nome do time"
          label="Nome"
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
        />
        <Campo
          obrigatorio
          type="color"
          placeholder="Digite a cor do time"
          label="Cor"
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
