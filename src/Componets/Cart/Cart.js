import React from 'react';
import EnrolledCourses from "../EnrolledCourses/EnrolledCourses"

const Cart = (props) => {
    const cart=props.cart;
    const totalPrice= cart.reduce((sum,course)=>sum+course.price,0);
    return (
        <div>
            <div>
                <h5>Total Items: {cart.length}</h5>
                <h5>Total Price: ${totalPrice}</h5>
            </div>
            <div>
                {cart.map(course=><EnrolledCourses course={course}></EnrolledCourses>)}
            </div>
        </div>
    );
};

export default Cart;