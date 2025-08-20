import { useState } from "react";
import Banner from "./components/banner/banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57C278",
    },
    {
      nome: "Front-end",
      cor: "#82CFFA",
    },
    {
      nome: "UX e Design",
      cor: "#E06B69",
    },
    {
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      nome: "Devops",
      cor: "#DB6EBF",
    },
    {
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const [colaboradores, setColaboradores] = useState([
    {
      nome:"LuizEsb",
      cargo:"Dev",
      imagem:"https://github.com/LuizEsb.png",
      time:"Front-end"
    },
    {
      nome:"Anderson",
      cargo:"Instrutor",
      imagem:"https://github.com/LuizEsb.png",
      time:"Inovação e Gestão"
    },
    {
      nome:"Daniel",
      cargo:"Dev",
      imagem:"https://github.com/LuizEsb.png",
      time:"Data Science"
    }
  ]);

  function deletaColaborador() {
    console.log("deletando");
  }

  function mudarCorDoTime(cor, nome) {
    setTimes(
      times.map((time) => {
        if (time.nome === nome) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
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
