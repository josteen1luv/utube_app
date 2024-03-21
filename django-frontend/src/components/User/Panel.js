import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function Panel(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
            </div>
            <section className="col-md-9">
                Panel
            </section>
        </div>
    );
}
export default Panel;