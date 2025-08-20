import "./Time.css";
import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";

const Time = (props) => {
  return (
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{ backgroundColor: hexToRgba(props.cor, 0.6) }}
      >
        <input
          value={props.cor}
          onChange={(evento) => props.mudarCor(evento.target.value, props.id)}
          type="color"
          className="input-cor"
        ></input>
        <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              id={colaborador.id}
              key={colaborador.nome}
              corDeFundo={props.cor}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              aoDeletar={props.aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
