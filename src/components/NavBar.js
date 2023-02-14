import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
//  import React, { useState } from 'react'

export default function NavBar(props) {
 
    return (
        <>
             <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">{props.About}</Link>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" id='search' aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch mx-1 my-1">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className ={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault"  >Grey-Dark Mode</label>
</div>
      <div className="form-check form-switch mx-1 my-1">
  <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className ={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault"  >Blue-Dark Mode</label>
</div>

<div className="form-check form-switch mx-1 my-1">
  <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className ={`form-check-label text-${props.mode==='dark'?'light':'dark'}`}  htmlFor="flexSwitchCheckDefault"  >Pink-Dark Mode</label>
</div>
    </div>
  </div>
</nav>
        </>
    )
}
NavBar.propTypes = {
    title: PropTypes.string.isRequired,//if we isrequired it means that this has to pass otherwise warning will occur 
 About: PropTypes.string
  };
NavBar.defaultProps={
title:"textUtils",
About:"about-us"
}