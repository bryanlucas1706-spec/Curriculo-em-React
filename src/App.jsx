import "./App.css";
import icone from "./imagens/icone b.png";
import tabuada from "./imagens/tabuada.png";
import form from "./imagens/formulario.png"
import gmail from "./imagens/gmail-new.png"
import linkedin from "./imagens/linkedin.png"
import github from "./imagens/github.png"
const App = () => {
  return (
    <div className="container">

      <header>
        <h1>BryanLucas.dev</h1>
        <h3>
          Desenvolvedor Front-End | React | JavaScript | Técnico em Mecatrônica
        </h3>
        <img src={icone} alt="icone da letra b" id="iconeB" />
        <div className="nav">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bryanlucas1706@gmail.com"><img id="gmail" src={gmail} alt="Enviar mensagem pelo e-mail" /></a>
          <a href="https://www.linkedin.com/in/bryan-lucas-b6674b2b7"><img id="linkedIn" src={linkedin} alt="Ir para o perfil do LinkedIn" /></a>
          <a href="https://github.com/bryanlucas1706-spec"><img id="github" src={github} alt="Ir para o perfil do GitHub" /></a>
        </div>
      </header>


      <aside className="sidebar">
        <section>
          <h2>
            Formação
          </h2>
          <ul id="formação">
            <li>Técnico em Mecatrônica - <strong>IFMG</strong></li>
            <li>Desenvolvedor Front-End - <strong>CEPEDI | IFMG</strong></li>
          </ul>
        </section>

        <section>
          <h2>Idiomas</h2>
          <ul>
            <li id="idiomas"><strong>Inglês</strong>(Básico / Intermediário)</li>
          </ul>
        </section> 

        <section>
          <h2>Habilidades</h2>
          <ul>
            <li>Trabalho em equipe</li>
            <li>Resolução de problemas</li>
            <li>Boa comunicação</li>
            <li>Lógica de Programação</li>
            <li>Organização</li>
          </ul>
        </section>

        <section>
          <h2>Tecnologias</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </section>

        
      </aside>

      <main>
        <section>
          <h2 id="h2resume">Resumo</h2>
          <p className="resume">
            Técnico em Mecatrônica pelo IFMG, com experiência em desenvolvimento de projetos e resolução de problemas. Formação em Front-End, com foco em React, JavaScript e interfaces modernas. Busco uma oportunidade para ingressar na área de tecnologia e contribuir com soluções eficientes.
          </p>
        </section>

        <section>
          <h2 id="h2projetos" >Projetos</h2>
          <div className="projetos">
            <a href="https://formulario-react-omega-nine.vercel.app/" ><img className="imagens" src={form} alt="Imagem do formulário em react" /></a>
            <a href="https://portfolio-react-three-azure.vercel.app/"><img className="imagens" src={tabuada} alt="Imagem da tabuada em react" /></a>
          </div>
        </section>
      </main>

      <footer>
        <p>Portfólio Desenvolvido em React.js</p>
        <p className="footer">© Bryan Lucas</p>
      </footer>

    </div>
  );
};

export default App;