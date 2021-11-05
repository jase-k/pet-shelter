import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useParams } from 'react-router';

const OnePet = (props) => {
    console.log(props)
    const [pet, setPet] = useState({})
    const [likes, setLikes] = useState(0)

    const {id} = useParams()

    useEffect(()=>{
        setPet(props.pet)
        setLikes(props.pet.likes)
    }, [props])
    const handleLike = () =>{
        setLikes(likes+1)
    }
    useEffect(()=>{
        axios.put("http://localhost:8000/api/pets/update/"+id, {...pet, likes: likes})
        .then(res => 
            console.log(res.data)
            // setPet({res.data.pet})
            )
    }, [likes])

    return (
        <table className="table table-bordered table-sm">
            <tr>
                <th>Pet Type:</th>
                <td></td>
                <td>{pet.type}</td>
            </tr>
            <tr>
                <th>Pet Description:</th>
                <td></td>
                <td>{pet.description}</td>
            </tr>
            <tr>
                <th>Pet Skills:</th>
                <td></td>
                <td>{
                    pet.skills ?
                        pet.skills.map((skill) =>{
                            return (
                                <p className="m-0 p-0">{skill}</p>
                                )
                            })
                            :""
                    }
                </td>
            </tr>
                    <td></td>
            <td><button className="btn btn-info" onClick={handleLike}>Like {pet.name}</button></td>
                    <td>{likes} likes</td>
        </table>
    );
};

OnePet.propTypes = {};

export default OnePet;