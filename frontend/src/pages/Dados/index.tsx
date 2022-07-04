import ImagemProfile from "../../assets/img/avatar.svg";

import "./styles.css";

import React, { useState, useEffect } from "react";
const words = ["retorno de férias!", "saída de férias!"];

function Dados() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length - 1 && subIndex === words[index].length) {
      return;
    }

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  const styles = { height: "10rem" };
  React.createElement("textarea", { style: styles });

  return (
    <header className="masthead text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* Masthead Avatar Image */}
        <br />
        <img className="masthead-avatar mb-5" src={ImagemProfile} alt="..." />
        <br />
        {/* Masthead Heading */}
        <h1 className="masthead-heading text-uppercase mb-0">
          Bem-vindo ao Livro de Apresentações
        </h1>
        {/*Icon Divider*/}
        <div className="divider-custom divider-dark">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-address-book"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Masthead Subheading */}
        <div className="container">
          <p className="masthead-subheading font-weight-light mb-0">
            Clique no botão abaixo para realizar a sua apresentação de{" "}
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </p>
        </div>
        {/* Button trigger modal */}
        <button
          id="btn_form"
          type="button"
          className="btn btn-outline-dark btn-xl"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Clique aqui
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Digite sua identidade
                </h5>
                <button
                  type="button"
                  className="close btn btn-outline-danger"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body form-inline">
                {/* COLOCAR AQUI UMA BARRA DE PESQUISA */}
                <input id="searchBar"
                  type="search"
                  className="form-control"
                  placeholder="Pesquisar"
                  aria-label="Pesquisar"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  data-dismiss="modal"
                >
                  Fechar
                </button>
                <button type="submit" className="btn btn-outline-success">
                  Pesquisar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="about page-section bg-secondary text-white mb-0">
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
      <section className="page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase mb-0">
            Contato
          </h2>
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-file-signature"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Digite o seu nome..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Nome de guerra</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Um nome é necessário.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Endereço de email</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    Um email é necessário.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email inválido.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(51) 988811216"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Ramal</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    Um número de ramal é necessário.
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    style={styles}
                    placeholder="Digite sua mensagem aqui..."
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Feedback</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    Uma mensagem é necessária.
                  </div>
                </div>
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Erro ao enviar mensagem!
                  </div>
                </div>
                <button
                  className="btn btn-outline-dark btn-xl disabled"
                  id="submitButton"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer text-center">
        <div className="container">
          <small>
            &copy; Copyright 2022/2023 - Divisão de Pessoal - B Adm Ap / 3&ordf;
            RM.
            <br />
            Desenvolvido por <em>3º Sgt STT Adam - B Adm Ap / 3&ordf; RM.</em>
            <br />
            <a href="https://github.com/adamcardoso">
              <i className="icon fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/adam-cardoso-142a61ab/">
              <i className="icon fab fa-linkedin fa-2x"></i>
            </a>
          </small>
        </div>
      </footer>
    </header>
  );
}

export default Dados;
