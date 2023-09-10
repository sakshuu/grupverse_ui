import React from 'react'
import Topics from '../components/Topics'
import TopPosts from '../components/TopPosts'
import Teams from '../components/Teams'
import "./../assets/css/teams.css"

const Home = () => {
  return <>
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3 col-sm-12 ">
<Topics/>
      </div>
      <div className="col-sm-12 col-md-6">
<TopPosts/>
      </div>
      <div className="col-sm-12  col-md-3">
        <Teams/>
      </div>
    </div>
  </div>
  </>
}

export default Home