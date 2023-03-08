import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">The News Hub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
            


        <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
          <li className="nav-item"><Link className="nav-link" to="/business" >Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/entertainment" >Entertainment</Link></li>
        {/* <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li> */}
        <li className="nav-item"><Link className="nav-link" to="/health" >Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science" >Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports" >Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/technology" >Technology</Link></li>

          </ul>
        </li>
      </ul>

      </ul>
 
    </div>
  </div>
</nav>
      </>
    )
  }
}
