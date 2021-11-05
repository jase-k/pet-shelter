import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Login from '../components/Login';
import { useNavigate } from 'react-router';
import { API_URL } from '..';
import PetsTable from '../components/PetsTable';
import NavBar from '../components/NavBar';

const Index = () => {
    const [ petList, setPetList ] = useState([])
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(API_URL+"/api/pets")
            .then(res=> {
                console.log(res)
                setPetList(res.data.pets)
            })
            .catch(err => console.log(err))
    }, []);

  
    return (
        <div >
            <NavBar home={true}/>
            <h2>These Pets are looking for a good home</h2>
            < PetsTable
            petList = {petList}  
            />
        </div>
    )
};

Index.propTypes = {};

export default Index;
