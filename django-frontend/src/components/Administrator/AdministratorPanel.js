import AdministratorSidebar from "./AdministratorSidebar";

function AdministratorPanel(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <AdministratorSidebar/>
                </aside>
            </div>
            <section className="col-md-9">
                Panel admina
            </section>
        </div>
    );
}
export default AdministratorPanel;