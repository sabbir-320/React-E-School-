import React from 'react';
import './EnrolledCourses.css'

const EnrolledCourses = (props) => {
    const {name,price,instructor}=props.course
    return (
        <div className="bg">
            <h3>{name}</h3>
            <h5>by {instructor}</h5>
        </div>
    );
};

export default EnrolledCourses;