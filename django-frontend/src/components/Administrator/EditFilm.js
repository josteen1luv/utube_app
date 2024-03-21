import { Link, useParams } from "react-router-dom";
import AdministratorSidebar from "./AdministratorSidebar";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const baseUrl="http://127.0.0.1:8000/api";
function EditFilm(){
    const [categories, setCategories] = useState([]);
    const [filmData, setFilmData] = useState({
        category:'',
        title:'',
        desciption:'',
        image:'',
        prev_image: ''
    });
    const {film_id} = useParams();
    useEffect(() => {
        try {
            axios.get(baseUrl+'/category/')
            .then((res)=>{
                setCategories(res.data)
            })
        } catch (error) {
            console.error(error);
        }
    },[]);
    useEffect(() => {
        try {
            axios.get(baseUrl+'/admin-film-detail/'+film_id)
            .then((res)=>{
                setFilmData({
                    category:res.data.category,
                    title:res.data.title,
                    desciption:res.data.desciption,
                    prev_image:res.data.image,
                    image:''
                });
            })
        } catch (error) {
            console.error(error);
        }
    },[]);
    const handleChange = (event)=>{
        setFilmData({
            ...filmData,
            [event.target.name]:event.target.value
        });
    }
    const handleFileChange = (event)=>{
        setFilmData({
            ...filmData,
            [event.target.name]:event.target.files[0]
        });
    }
    const formSubmit=()=>{
        const _formData = new FormData();
        _formData.append('category', filmData.category);
        _formData.append('administrator',1);
        _formData.append('title', filmData.title);
        _formData.append('description', filmData.desciption);
        if(filmData.image!==''){
            _formData.append('image', filmData.image, filmData.image.name);
        }
        // _formData.append('image', filmData.image, filmData.image.name);
        try {
            axios.post(baseUrl+'/film/', _formData,{
                headers:{
                    'content-type': 'multipart/form-data'
                }
            })
            .then(res=>{
                console.log(res.data);
            });
        } catch (error) {
            console.error(error.response);
        }
    }
}