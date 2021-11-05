import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div className="d-flex justify-content-between">
            <h1>Pet Shelter</h1>
            {
                props.home ? <Link to="/pets/new">add a pet to the shelter</Link> : <Link to="/">return home</Link>
            }
        </div>
    );
};

NavBar.propTypes = {};

export default NavBar;