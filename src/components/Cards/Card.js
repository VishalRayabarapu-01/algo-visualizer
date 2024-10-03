import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="card hover-zoom">
            <img src={props.image} style={{height : '15em'}} className="card-img-top" alt="Graph" />
            <div className="card-body">
                <h5 className="card-title fw-bolder mt-3" style={{fontFamily : 'Poppins'}}>{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <Link to={props.path} className='btn btn-gradient'>Visualize</Link>
            </div>
        </div>
    );
};

export default Card;
