function AdministratorRegister(){
    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    <div className="card">
                        <h5 className="card-header">Rejestracja Administatora</h5>
                        <div className="card-body">
                            <form>
                            <div className="mb-3">
                                    <label for="name" className="form-label">Nazwa Administatora</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Hasło</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Zarejestruj</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AdministratorRegister;