import ImageLogin from "../../assets/img/imag1.jpeg";

import "./login-styles.css"

function TelaLogin() {

    return(
    
        <body className="body bg-dark">
          <div id = "login-tela" className="container">
            
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
              
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Bem vindo de volta!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Digite o endereço de email..."></input>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Senha"></input>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck"></input>
                          <label className="custom-control-label" >Lembrar senha</label>
                        </div>
                      </div>
                      <a href="index-dashboard.html" className="btn btn-primary btn-user btn-block"> Login </a>
                    </form>
                    <hr/>
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">Esqueci minha senha</a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">Criar conta</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </body>
        
    );
}

export default TelaLogin;