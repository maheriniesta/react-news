import React from 'react'
import { Link } from 'react-router-dom'
export default function Navebar() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-uppercase" href="#">maher news</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-capitalize" to="about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-capitalize" to="wallstreet">wall street</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-capitalize" to="techcrunch">tech crunch</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-capitalize" to="usright">uS right</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-capitalize" to="appel">appel</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-capitalize" to="tesla">tesla</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <ul >
            <div className=' d-flex justify-content-center align-content-center fs-4'>
                <i className="fa-brands fa-facebook-f  mt-2" />
                <i className="fa-brands fa-instagram mx-3 mt-2" />
                <i className="fa-brands fa-twitter mt-2" />
            </div>


        </ul>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
