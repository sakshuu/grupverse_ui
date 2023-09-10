import React from 'react'
import { face, linkedin, mail, twitter } from '../assets/img'
import TopPosts from '../components/TopPosts'
import "./../assets/css/login.css"
import { Link } from 'react-router-dom'

const Signup = () => {
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
<h6 className='dark heading'>OR </h6>
                <div class="card card-login">
<div className='logins'>

<div>

                    <div class="mt-2">
                      <input className='inp'
                        type="mail"
                        placeholder="Username"
                      />

                    </div>
                    <div class="mt-2">
                      <input className='inp'
                        type="mail"
                        placeholder="Email"
                      />

                    </div>
                    <div class="mt-2">
                      <input className='inp'
                        type="mail"
                        placeholder="Name"
                      />

                    </div>
                    <div class="mt-2">
                      <input className='inp'
                        type="password"
                        placeholder="Password"
                        />
                    </div>
                        </div>
</div>

                </div>
                <div className='d-flex justify-content-center'>
                    <button type="button" class="btn w-50 btn-dark mt-3">
                      VERIFY EMAIL
                    </button>
                </div>
                    <p class="text-center dark mt-3">
                    Didn't register yet? <Link className='nav-deco' to="/login">login</Link>
                    </p>

    </div>
    <div className="col-sm-12 col-md-6 mt-4">
      <TopPosts/>
    </div>
  </div>
</div>
  </>
}

export default Signup