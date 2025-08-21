import "./Colaborador.css";
import { IoCloseCircle } from "react-icons/io5";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

const Colaborador = ({
  id,
  imagem,
  nome,
  cargo,
  corDeFundo,
  aoDeletar,
  favorito,
  aoFavoritar,
}) => {
  function favoritar() {
    aoFavoritar(id);
  }

  const propsFavorito = {
    size: 25,
    onClick: favoritar 
  }

  return (
    <div className="colaborador">
      <IoCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome}></img>
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <div className="favoritar">
          {favorito ? (
            <HiHeart  {...propsFavorito} color="#FF0000"/>
          ) : (
            <HiOutlineHeart {...propsFavorito} color="#000000" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
