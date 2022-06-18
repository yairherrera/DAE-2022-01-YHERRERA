import {Link} from 'react-router-dom';

function ForgotPassword(){
    return(
        <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-5">
                                <div class="card shadow-lg border-0 rounded-lg mt-5">
                                    <div class="card-header"><h3 class="text-center font-weight-light my-4">Recuperar contraseña</h3></div>
                                    <div class="card-body">
                                        <div class="small mb-3 text-muted">Escriba su direccion de email y nosotros enviaremos el link para recuperar la contraseña.</div>
                                        <form>
                                            <div class="form-floating mb-3">
                                                <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                                <label for="inputEmail">Direccion de Correo</label>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                                <Link to="/login">Retornar al Login</Link>
                                                <a class="btn btn-primary" href="login.html">Reiniciar Contraseña.</a>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="card-footer text-center py-3">
                                        <div class="small"><Link to="/register">No tienes cuenta, Registrate</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default ForgotPassword;