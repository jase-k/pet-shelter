import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import OnePet from '../components/OnePet';
import NavBar from '../components/NavBar';

const ViewPet = () => {
    const [pet, setPet] = useState({});
    const {id} = useParams()
    const nav = useNavigate()
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+id)
        .then(res => {
            console.log(res)
            setPet(res.data.pet)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, []);
    const handleAdoption = () => {
        axios.delete("http://localhost:8000/api/pets/delete/"+id)
        .then(res => {
            console.log(res)
            nav("/")
        }).catch(err => console.log(err.response))
    }
    if(id === "new"){
        return(<></>)
    }
    return (
        <>
            <NavBar home={false}></NavBar>
            <div className="d-flex justify-content-around">
                <h3>Details about: {pet.name}</h3>
                <button className="btn btn-danger" onClick={handleAdoption}>Adopt {pet.name}</button>
            </div>
            < OnePet pet = {pet}/>
        </>
    );
};

ViewPet.propTypes = {};

export default ViewPet;