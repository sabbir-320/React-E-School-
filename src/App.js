import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import fakeData from "./fakeData/fakedata";
import Courses from "./Componets/Courses/Courses"
import { useState } from 'react';
import Cart from './Componets/Cart/Cart';

function App(){

  const [cart,setcart]=useState([]);
  let totalEnrolled=0;
  function cartUpdate(course){
    totalEnrolled=[...cart,course];
    setcart(totalEnrolled);
  }

  return (
    <div className="container">
      <header className="bg d-flex justify-content-center">
        <h1>Welcome to Our E-School</h1>
      </header>
      <div className="row">
        <div className="col-md-8">
          {fakeData.map(course=><Courses enrolled={cartUpdate} course={course}></Courses>)}
        </div>
        <div className="col-md-4">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
