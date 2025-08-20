import { useState } from "react";
import Banner from "./components/banner/banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-end",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      nome: "LuizEsb",
      cargo: "Dev",
      imagem: "https://github.com/LuizEsb.png",
      time: "Front-end",
    },
    {
      id: uuidv4(),
      nome: "Anderson",
      cargo: "Instrutor",
      imagem: "https://github.com/LuizEsb.png",
      time: "Inovação e Gestão",
    },
    {
      id: uuidv4(),
      nome: "Daniel",
      cargo: "Dev",
      imagem: "https://github.com/LuizEsb.png",
      time: "Data Science",
    },
  ]);

  function deletaColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          cor={time.cor}
          id={time.id}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletaColaborador}
          mudarCor={mudarCorDoTime}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
