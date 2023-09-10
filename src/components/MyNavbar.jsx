import React from 'react'
import { Navlogo } from '../assets/img'
import "./../assets/css/navbar.css";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  
  return <>

  <nav class="navbar navbar-expand-lg bg-light navbar-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">
        <img src={Navlogo} alt="" width={40} /> Grupverse
      </Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav d-flex gap-3 mx-auto">

          <Link class="nav-link active" to="/">Home</Link>
          <a class="nav-link active" href="#">About Us</a>
          <a class="nav-link active" href="#">Contect Us</a>
          <a class="nav-link active" href="#">Help</a>
        </div>

        <div className='d-flex gap-3 align-items-baseline mx-auto'>
          <div>
        <input type="serach" placeholder='Serach...' className='inp-nav'/>
          </div>
          <div><i class="bi bi-search"></i></div> {' '}
          <div><i class="bi bi-mic-fill"></i></div>
        </div>
        <div className="navbar-nav  ms-auto">
          <div className='d-flex gap-3'>
          <div><i class="nav-icons bi bi-bell-fill" ></i></div>
  <div  class="dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
  <i class="nav-icons bi bi-person-circle" ></i>
  </div>
  <ul class="dropdown-menu dropdown-menu-md-end m-2 p-4">
    <li><Link class="active nav-link" to="/login">Login</Link></li>
    <li><Link class="active nav-link" to="/signup">Register</Link></li>
    <li><Link className='active nav-link' href="#">Terms & condition</Link></li>
    <li><Link className='active nav-link' href="#">privacy policy</Link></li>
    <li><Link className='active nav-link' href="#">settings</Link></li>
  </ul>
      </div>
      </div>
    </div>
    </div>
  </nav>

  </>
}

export default MyNavbar