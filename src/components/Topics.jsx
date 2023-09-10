import React from 'react'
import "./../assets/css/topics.css"
import { face, insta, linkdinlogo, software, twitter } from '../assets/img/topics'

const Topics = () => {
  return <>
<div className='mt-4'>

  <button type="button" class="heading list-main list-group-item list-group-item-action"><span><i class="bi bi-file-person"></i></span> My Feed</button>
  <button type="button" class="heading list-main list-group-item list-group-item-action"><span><i class="bi bi-signpost-2"></i></span> My Post</button>
  <button type="button" class="heading list-main list-group-item list-group-item-action"><span><i class="bi bi-postcard-fill"></i></span> My Team Post</button>
  <button type="button" class="heading list-main list-group-item list-group-item-action"><span><i class="bi bi-person"></i></span> My Follwoing Post</button>
  <button type="button" class="heading list-main list-group-item list-group-item-action" ><span><i class="bi bi-share-fill"></i></span>  Share post</button>

  <h6 className='dark heading mt-4'>Trending Topics of the week</h6>
  <div className="card card-top">
    <div  className='img-main'>
    <img src={software} width={200} alt="" />
    </div>
  </div>
  <p className='heading dark'>Top software for designers</p>
  <div className='d-flex gap-3'>
    <img width={45} src={face} alt="" />
    <img width={45} src={insta} alt="" />
    <img width={45} src={linkdinlogo} alt="" />
    <img width={45} src={twitter} alt="" />
  </div>
</div>
  </>
}

export default Topics