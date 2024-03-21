import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function ProfileSettings(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Ustawienia usera</h5>
                        <div className="mb-3 row">
                            <label for="fullname" className="col-sm-2 col-form-label">Pełna nazwa</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="fullname" value="Jan Kowalski"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" readOnly className="form-control-plaintext" id="email" value="jankowalski@gmail.com"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label for="password" className="col-sm-2 col-form-label">Hasło</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control-plaintext" id="password" defaultValue="123456"/>
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <div className="col-sm-10">
                                <button className="btn btn-primary">Modyfikuj</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>  
    );
}
export default ProfileSettings;