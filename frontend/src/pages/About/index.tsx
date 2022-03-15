import "./styles.css";
import "../../../src/index.css";

function About() {
  return (
    <header>
      <section id="about" className="page-section bg-secondary text-white mb-0">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            Sobre
          </h2>

          <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-address-card"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row">
            <div className="col-lg-4 ms-auto">
              <p className="lead">
                Este sistema foi desenvolvido com novas tecnologias. Com ele,
                você irá realizar as suas apresentações de férias ou
                afastamentos da guarnição, de uma forma rápida e eficiente.
              </p>
            </div>

            <div className="col-lg-4 me-auto">
              <p className="lead">
                Caso você tenha alguma dúvida, não exite, entre em contato via
                formulário abaixo. Você pode enviar dúvidas, seu feedback sobre
                este sistema ou até mesmo sugestões de melhorias.
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default About;
