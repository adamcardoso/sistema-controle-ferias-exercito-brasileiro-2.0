import LogoBase from "../../assets/img/logo-base.png";
import './styles.css';
import "../../../src/index.css";

function Navbar(){
    return (
            <nav className="navbar navbar-expand-lg text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <img id="logo-base" className="img-fluid" src={LogoBase} alt="..."/>
                    <br/>
                    <a className="navbar-brand" href="#page-top"><p>Base de Administração e Apoio <br/>da 3ª Região Militar</p></a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-secondary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu<i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#page">Home</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">Sobre</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contato</a>
                            </li>

                            <li className="nav-item mx-0 mx-lg-1">
                                <a className="nav-link py-3 px-0 px-lg-3 rounded" href="login-dashboard.html">Administrador</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;