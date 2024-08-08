import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

 
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav" >
              <li class="nav-item">
             <h1> crete</h1> 
              </li>
              <li class="nav-item">
              <h1 > display</h1> 
              </li>
            </ul>
          </div>
         
        </div>
      </nav>
    </>
  );
};
export default Navbar;