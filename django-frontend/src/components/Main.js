import About from "./About";
import FilmDetail from "./FilmDetail";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
import Login from "./User/Login";
import Register from "./User/Register";
import Panel from "./User/Panel";
import MyFilms from "./User/MyFilms";
import FavoriteFilms from "./User/FavoriteFilms";
import RecommendedFilms from "./User/RecommendedFilms";
import ProfileSettings from "./User/ProfileSettings";
import ChangePassword from "./User/ChangePassword";
import AdministratorLogin from "./Administrator/AdministratorLogin";
import AdministratorRegister from "./Administrator/AdministratorRegister";
import AdministratorPanel from "./Administrator/AdministratorPanel";
import AdministatorFilms from "./Administrator/AdministratorFilms";
import AddFilm from "./Administrator/AddFilm";

function Main(){
    return(
        <div className="App">
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/detail/:film_id" element = {<FilmDetail/>}/>
                    <Route path="/user-login" element={<Login/>}/>
                    <Route path="/user-register" element={<Register/>}/>
                    <Route path="/user-panel" element={<Panel/>}/>
                    <Route path="/my-films" element={<MyFilms/>}/>
                    <Route path="/favorite-films" element={<FavoriteFilms/>}/>
                    <Route path="/recommended-films" element={<RecommendedFilms/>}/>
                    <Route path="/profile=settings" element={<ProfileSettings/>}/>
                    <Route path="/change-password" element={<ChangePassword/>}/>
                    <Route path="/admin-login" element={<AdministratorLogin/>}/>
                    <Route path="/admin-register" element={<AdministratorRegister/>}/>
                    <Route path="/admin-panel" element={<AdministratorPanel/>}/>
                    <Route path="/admin-films" element={<AdministatorFilms/>}/>
                    <Route path="/admin-add-film" element= {<AddFilm/>}/>

                </Routes>
            <Footer/>
        </div>
    );
}
export default Main;