import "./styles.css";
import "../../../src/index.css";



function Footer(){

    return (
        <footer className="footer text-center">
            <div className="container">
                    <small >&copy; Copyright 2022/2023 - Divisão de Pessoal - B Adm Ap / 3&ordf; RM.
                    <br />
                    Desenvolvido por <em>3º Sgt STT Adam - B Adm Ap / 3&ordf; RM.</em>
                    <br />
                    <a href="https://github.com/adamcardoso"><i className="icon fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/adam-cardoso-142a61ab/"><i className="icon fab fa-linkedin fa-2x"></i></a>
                </small>
            </div>
        </footer>
    );

}

export default Footer;