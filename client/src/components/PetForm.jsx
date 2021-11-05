import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
const petInitialState = {
        name: "",
        type: "",
        description: "",
        skills: [""]
    }
const PetForm = (props) => {
    const [pet, setPet] = useState({...petInitialState})
    console.log(pet, props)
    useEffect(()=>{
            setPet(props.pet)
    }, [props])

    const handleChange = (e) => {
        let [skill1, skill2, skill3] = pet.skills
        if(e.target.name === "skill1"){
            setPet({
                ...pet,
                skills : [e.target.value, skill2, skill3]
            })
        }
        else if(e.target.name === "skill2"){
            setPet({
                ...pet,
                skills : [skill1, e.target.value, skill3]
            })
        }
        else if(e.target.name === "skill3"){
            setPet({
                ...pet,
                skills : [skill1, skill2, e.target.value]
            })
        }
        else{
            setPet({
                ...pet,
                [e.target.name] : e.target.value
            })
        }
    }

    return (
        <form className="form-control" onSubmit={(e) =>{props.handleSubmit(e, pet)}}>
            <div className='mb-3'>
                <label htmlFor="name">Pet Name:</label>
                <input type="text" name="name" id="name" value={pet.name} onChange={(e) => {handleChange(e)}}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="type">Pet Type:</label>
                <input type="text" name="type" id="type" value={pet.type} onChange={(e) => {handleChange(e)}} />
            </div>
            <div className='mb-3'>
                <label htmlFor="description">Description:</label>
                <input type="text" name="description" id="description" value={pet.description} onChange={(e) => {handleChange(e)}} />
            </div>
            <div className='mb-3'>
                <label htmlFor="skill1">Skill 1:</label>
                <input type="text" name="skill1" id="skill1" value={pet.skills ? pet.skills[0] : ""} onChange={(e) => {handleChange(e)}}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="skill2">Skill 2:</label>
                <input type="text" name="skill2" id="skill2" value={pet.skills ? pet.skills[1] : ""} onChange={(e) => {handleChange(e)}}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="skill3">Skill 3:</label>
                <input type="text" name="skill3" id="skill3" value={pet.skills ? pet.skills[2] : ""} onChange={(e) => {handleChange(e)}}/>
            </div>
            <button type="submit" >
                {
                props.isEdit ? "Save" : "Add"
                }
            </button>
        </form>
    );
};

PetForm.propTypes = {};

export default PetForm;