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

  <h6 className='dark heading mt-4 mb-3'>Trending Topics of the week</h6>
  <div className="card-top">
    <img src={software} width={200}  alt="" />
    {/* </div> */}
  </div>
  <p className='heading dark mt-3 mb-3'>Top software for designers</p>
  <div className='icon-img'>
    <div>
    <img width={45} src={face} alt="" />
    </div>
    <div>
    <img width={45} src={insta} alt="" />
    </div>
      
    <div>
    <img width={45} src={linkdinlogo} alt="" />
    </div>
      
    <div>
    <img width={45} src={twitter} alt="" />
    </div>
  </div>
</div>
  </>
}

export default Topics