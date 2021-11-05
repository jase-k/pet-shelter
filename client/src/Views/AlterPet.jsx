import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import PetForm from '../components/PetForm';
import NavBar from '../components/NavBar';
const petInitialState = {
    name: "",
    type: "",
    description: "",
    skills: []
}

const AlterPet = () => {
    const [isEdit, setIsEdit] = useState(true);
    const [pet, setPet] = useState({...petInitialState})
    const {id} = useParams();
    const nav = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+id)
        .then(res => {
            console.log(res)
            setPet(res.data.pet)
        })
        .catch(err => {
            console.log(err.response)
            setIsEdit(false)
            setPet({...petInitialState})
        })
    }, []);
    const handleSubmit = (e, pet) =>{
        e.preventDefault()
        if(isEdit){
            axios.put("http://localhost:8000/api/pets/update/"+id, pet)
            .then(res => {
                console.log(res)
                nav("/")
            })
            .catch(err => {
                console.log(err.response)
            })
        }
        else{
            axios.post("http://localhost:8000/api/pets/new", pet)
            .then(res => {
                console.log(res)
                nav("/")
            })
            .catch(err => {
                console.log(err.response)
                alert(err.response.data.error.message)
            })
        }
    }
    return (
        <div>
            <NavBar home={false}></NavBar>
            < PetForm 
            handleSubmit= {(e, pet) => handleSubmit(e, pet)}  
            pet ={pet}
            isEdit = {isEdit}
            />

        </div>
    );
};

AlterPet.propTypes = {};

export default AlterPet;