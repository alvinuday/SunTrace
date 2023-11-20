import React from "react";
import { useNavigate } from "react-router-dom";
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    // Your click event logic here
    navigate('/');
  };
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div onClick={handleClick} className="logo_container cursor-pointer" style={{"display" : "flex", "align-items" : "center", "gap" : "20px"}}>

          <img alt="MongoDB logo" style={{"width" : 20 + '%'}} src="https://cdn-icons-png.flaticon.com/512/401/401124.png"></img>
       <h3>SunTrace</h3>
      </div>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             {/* <NavLink className="nav-link" to="/create">
               Create Record
             </NavLink> */}
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}
