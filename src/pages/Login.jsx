import React from 'react'
import TopPosts from '../components/TopPosts'
import { Link } from 'react-router-dom'
import "./../assets/css/login.css"
import { face, linkedin, mail, twitter } from '../assets/img'

const Login = () => {
  return <>
<div className="container">
  <div className="row">
    <div className="col-sm-12 col-md-6 mt-4">
  <div className='heading'>GRUPVERSE</div>  
<div className='heading'>One Stop Social Media For Teams</div>
<h6 className='mt-4 mb-4 dark heading'>Login using the below options</h6>
<div className='d-flex gap-3 justify-content-center flex-wrap mb-4'>
  <img width={40} src={linkedin} alt="" />
  <img width={40} src={mail} alt="" />
  <img width={40} src={twitter} alt="" />
  <img width={40} src={face} alt="" />
</div>
<h6 className='dark heading'>OR login with</h6>
      <p className='heading mt-4'>Login with email or username</p>
                <div class="card card-login">
<div className='logins'>

<div>

                    <div class="mt-2">
                      <input className='inp heading'
                        type="mail"
                        placeholder="Username or Email"
                      />

                    </div>
                    <div class="mt-2">
                      <input className='inp heading'
                        type="password"
                        placeholder="Password"
                        />
                    </div>
                        </div>
</div>

                </div>
                <div className='d-flex justify-content-center'>
                    <button type="button" class="btn w-25 btn-dark mt-3">
                      Login
                    </button>
                </div>
                    <p class="text-center dark mt-3">
                    Didn't register yet? <Link className='nav-deco' to="/signup">Sign Up</Link>
                    </p>

    </div>
    <div className="col-sm-12 col-md-6 mt-4">
      <TopPosts/>
    </div>
  </div>
</div>
  </>
}

export default Login