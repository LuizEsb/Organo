import { useState } from "react";
import Banner from "./components/banner/banner";
import Formulario from "./components/Formulario";
import Time from "./components/Time";
import Rodape from "./components/Rodape";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "var(--verde)",
      corSecundaria: "var(--verde-secundario)",
    },
    {
      nome: "Front-end",
      corPrimaria: "var(--azul)",
      corSecundaria: "var(--azul-secundario)",
    },
    {
      nome: "UX e Design",
      corPrimaria: "var(--roxo)",
      corSecundaria: "var(--roxo-secundario)",
    },
    {
      nome: "Data Science",
      corPrimaria: "var(--verde-claro)",
      corSecundaria: "var(--verde-claro-secundario)",
    },
    {
      nome: "Devops",
      corPrimaria: "var(--vermelho)",
      corSecundaria: "var(--vermelho-secundario)",
    },
    {
      nome: "Mobile",
      corPrimaria: "var(--amarelo)",
      corSecundaria: "var(--amarelo-secundario)",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "var(--laranja)",
      corSecundaria: "var(--laranja-secundario)",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

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
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}

      <Rodape />
    </div>
  );
}

export default App;
