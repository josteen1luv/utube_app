import { Link } from "react-router-dom";

function Register(){
    return(
        <div className="container mb-4">
        <div className="row">
            <div className="col-6 offset-3">
                <div className="card">
                    <h5 className="card-header">Rejestrowanie usera</h5>
                    <div className="card-body">
                        <form>
                        <div className="mb-3">
                                <label for="full-name" className="form-label">Pełna nazwa</label>
                                <input type="full-name" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Nazwa usera</label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Hasło</label>
                                <input type="password" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="roles" className="form-label">Role</label>
                                <input type="roles" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="mobile-nr" className="form-label">Numer telefonu</label>
                                <input type="mobile-nr" className="form-control"/>
                            </div>
                            <div className="mb-3">
                                <label for="address" className="form-label">Adres</label>
                                <input type="address" className="form-control"/>
                            </div>
                            <button type="submit">Zarejestruj</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Register;
