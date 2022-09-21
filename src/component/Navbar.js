import React from 'react'
import  './style.css';
import logo from './contact-design-girls-name.png';
import {Link} from "react-router-dom";

function Navbar() {
   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

  <div className="container">
    
    <Link className="navbar-brand" to="/"><img id="MDB-logo"
        src={logo} alt="MDB Logo"
        draggable="false" height="50" width="200px"/></Link>
<button className="navbar-toggler" onClick={()=>{document.body.style.zoom=0.8;}} type="button" data-bs-toggle="collapse" 
data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
 <span className="navbar-toggler-icon"></span></button>

 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <ul className="navbar-nav me-3">
        <li className="nav-item">
          <Link className="nav-link active d-flex align-items-center" aria-current="page" to="/">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active d-flex align-items-center" aria-current="page" to="/contactList">ContactList</Link>
        </li>
      </ul>
   

 

     
    </div>
    
  </div>
 
</nav>
    </div>
  )
}

export default Navbar
