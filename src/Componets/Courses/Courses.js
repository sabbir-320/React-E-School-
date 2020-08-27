import React from 'react';
import "./Courses.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const Courses = (props) => {
    const {name,instructor,price,url,rating}=props.course;
    return (
        <div>
            <img src={url} alt=""/>
            <h1>{name}</h1>
            <h5>Instructor: {instructor}</h5>
            <h5>Rating: {rating}</h5>
            <h5>Price: ${price}</h5>
            <button className="btn btn-primary" onClick={()=>props.enrolled(props.course)}><FontAwesomeIcon icon={faPlusSquare}/> Enroll Now</button>
        </div>
    );
};

export default Courses;