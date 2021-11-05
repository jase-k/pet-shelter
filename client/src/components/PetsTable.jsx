import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PetsTable = (props) => {
    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Type</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    props.petList.map((pet) =>{
                        {console.log(pet)}
                        return(
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={"/pets/"+pet._id+"/edit"}className="btn btn-warning">EDIT</Link>
                                    <Link to={"/pets/"+pet._id} className="btn btn-info" > DETAILS</Link>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};

PetsTable.propTypes = {};

export default PetsTable;