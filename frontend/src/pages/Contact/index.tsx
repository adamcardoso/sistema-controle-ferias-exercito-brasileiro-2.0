import React from "react";

import "./styles.css";
import "../../../src/index.css";


function Contact(){

    const styles = { height: '10rem' };
    React.createElement("textarea", { style: styles });
    
    return (
        <header>
            <section className="page-section" id="contact">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase mb-0">
                        Contato
                    </h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line">
                        
                        </div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-file-signature"></i>
                        </div>
                        <div className="divider-custom-line">
                        
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">
                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Digite o seu nome..." data-sb-validations="required"/>
                                    <label htmlFor="name">Nome de guerra</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">
                                        Um nome é necessário.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email"/>
                                    <label htmlFor="email">Endereço de email</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">
                                        Um email é necessário.
                                    </div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">
                                        Email inválido.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="tel" placeholder="(51) 988811216" data-sb-validations="required"/>
                                    <label htmlFor="phone">Ramal</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">
                                        Um número de ramal é necessário.
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" style={styles} placeholder="Digite sua mensagem aqui..."  data-sb-validations="required"></textarea>
                                    <label htmlFor="message">Feedback</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">
                                        Uma mensagem é necessária.
                                    </div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">
                                        Form submission successful!
                                        </div>
                                            To activate this form, sign up at
                                        <br />
                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">
                                        Erro ao enviar mensagem!
                                    </div>
                                </div>
                                <button className="btn btn-outline-dark btn-xl disabled" id="submitButton" type="submit">
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}


export default Contact;