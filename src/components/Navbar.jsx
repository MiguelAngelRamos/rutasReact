import React from 'react'
import { NavLink, Link } from 'react-router-dom'; 
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>React Router</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" className="nav-link" to={"/"}>Inicio</NavLink>
            <NavLink exact activeClassName="active" className="nav-link" to={"/nosotros"}>Nosotros</NavLink>
            <NavLink exact activeClassName="active" className="nav-link" to={"/contacto"}>Contacto</NavLink>
            <NavLink exact activeClassName="active" className="nav-link" to={"/users"}>Users</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
