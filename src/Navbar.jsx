import React from 'react'
import { NavLink } from 'react-router-dom'
import Webb from "../src/image/logoo.png";
const Navbar = () => {
  return (
    <>
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand mb-0 h1" to="/">
    <img img src={Webb} alt="" width="35" height="50" class="img-fluid logo align-text-top"/>Dgita
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     
      <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Home
                    </NavLink>    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to="/">A</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">B</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">C</NavLink></li>
                    </ul>  
          </li>

          <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Services
                    </NavLink>    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to="/">A</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">B</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">C</NavLink></li>
                    </ul>  
          </li>

          <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Portfolio
                    </NavLink>    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to="/">A</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">B</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">C</NavLink></li>
                    </ul>  
          </li>

          <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Blogs
                    </NavLink>    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to="/">A</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">B</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">C</NavLink></li>
                    </ul>  
          </li>
          <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Pages
                    </NavLink>    
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><NavLink className="dropdown-item" to="/">A</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">B</NavLink></li>
                      <li><hr className="dropdown-divider"/></li>
                      <li><NavLink className="dropdown-item" to="/">C</NavLink></li>
                    </ul>  
          </li>
      </ul>
  
       <form className="container-fluid justify-content-start">
    <button className="btn btn-outline-success navbar-nav ml-auto mb-2 mb-lg-0 "  type="button">Get Details</button>

  </form>

    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
