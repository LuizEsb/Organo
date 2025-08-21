import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul className="lista-redes">
          <li>
            <a href="facebook.com" target="_blank">
              <img src="./imagens/fb.png" alt="logo facebook" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src="./imagens/tw.png" alt="logo twitter" />
            </a>
          </li>
          <li>
            <a href="instagram.com/luiz_esb" target="_blank">
              <img src="./imagens/ig.png" alt="logo insta" />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="./imagens/logo.png" alt="organo logo"></img>
      </section>
      <section>
        <p>Desenvolvido por <strong>LuizEsb</strong></p>
      </section>
    </footer>
  );
};

export default Rodape;
