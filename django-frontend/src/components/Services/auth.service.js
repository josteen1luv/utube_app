import axios from "axios";
const urlApi = 'http://localhost:8000/api';

const signup = (full_name, username, email, password, roles, mobile_nr, address) =>{
    return axios
    .post(urlApi+'/admin-register',{
        full_name,
        username,
        email,
        password,
        roles,
        mobile_nr,
        address
    })
    .then((response)=>{
        if(response.data.token){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    });
};

const login = (email, password)=>{
    return axios
    .post(urlApi + '/admin-login',{
        email,
        password
    })
    .then((responce)=>{
        if(responce.data.token){
            localStorage.setItem("user", JSON.stringify(responce.data));
        }
    })
};
const logout = ()=>{
    localStorage.removeItem('user');

};
const getCurrentUser= ()=>{
    return JSON.parse(localStorage.getItem('user'));
};
const authService = {
    signup,
    login,
    logout,
    getCurrentUser
};

export default authService;