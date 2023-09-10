import React, { useEffect, useState } from 'react'
import { GPT3, Orion, Perseus, greet, meme,  nature,  networks } from '../assets/img/posts/cards'
import { ai, csk, singhal97, space, surva } from '../assets/img/posts'
import "./../assets/css/topPosts.css"

const TopPosts = () => {
  const [postsToShow, setPostsToShow] = useState(4); // Initial number of posts to show
  const [isLoading, setIsLoading] = useState(false);

  const post =[ 
    {
    img_sm:surva,
    img_smm:space,
    stitle:"suvro",
    sectitle:"Space",
    img_card:Orion,
    title:"Orion",
    desc:"Orion is a prominent constellation located on the celestial equator and visible throughout the world. It is one of the most conspicuous and recognizab"
  },
    {
    img_sm:surva,
    img_smm:space,
    stitle:"suvro",
    sectitle:"Space",
    img_card:Perseus,
    title:"Perseus",
    desc:"Perseus is a constellation in the northern sky, being named after the Greek mythological hero Perseus. It is one of the 48 ancient constellations list"
  },
  {
    img_sm:surva,
    img_smm:ai,
    stitle:"suvro",
    sectitle:"AI",
    img_card:GPT3,
    title:"Will Programmers Lose Their Jobs Because of GPT3",
    desc:"Less programming jobs doesn’t mean no programming jobs at all. There will still be a need for qualified specialists to move the things forward, for ex"
  },
  {
    img_sm:surva,
    img_smm:ai,
    stitle:"suvro",
    sectitle:"AI",
    img_card:networks,
    title:"Recurrent Neural Networks",
    desc:"Recurrent Neural Network(RNN) are a type of Neural Network where the output from previous step are fed as input to the current step. In traditional ne "
  },
  {
    img_sm:singhal97,
    img_smm:csk,
    stitle:"singhal97",
    sectitle:"Csk",
    img_card:greet,
    title:"Greet",
    desc:"Thanks "
  },
  {
    img_sm:singhal97,
    img_smm:csk,
    stitle:"singhal97",
    sectitle:"Csk",
    img_card:meme,
    title:"MEME",
    desc:"meme"
  },
  {
    img_sm:singhal97,
    img_smm:csk,
    stitle:"singhal97",
    sectitle:"Csk",
    img_card:nature,
    title:"Nature",
    desc:"Xyz"
  },
  {
    img_sm:singhal97,
    img_smm:csk,
    stitle:"singhal97",
    sectitle:"Csk",
    img_card:nature,
    title:"Nature",
    desc:"Xyz"
  },
]
const loadMorePosts = () => {
  setIsLoading(true);
  setTimeout(() => {
    setPostsToShow(prev => prev + 4); // Increase the number of posts to show by 4
    setIsLoading(false);
  }, 1000); // Simulated loading time
};
useEffect(() => {
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadMorePosts();
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return <>
  <h4 className='heading dark mt-4'>Top Posts</h4>
 {
    post.slice(0, postsToShow).map(item => <>
  <div className='center-card'>
  <div className="card card-posts">
    <div className='d-flex gap-2 justify-content-start align-items-basline'>
  <img width={45} src={item.img_sm} alt="" /><span className='mt-2'>{item.stitle}</span>
  <img width={45} src={item.img_smm} alt="" /><span className='mt-2'>{item.sectitle}</span>
    </div>
    <h6 className='mt-4 mb-2'>{item.title}</h6>
    <img src={item.img_card} className='card-img' alt="" />
    <p className='mt-4'>{item.desc}</p>
    <div className='d-flex gap-3 flex-wrap'>
    <i class="icon-posts bi bi-hand-thumbs-up"></i><span className='mt-2'>878</span>

    <i class="icon-posts bi bi-hand-thumbs-down"></i><span className='mt-2'>87</span>

    <i class="icon-posts bi bi-chat-dots"></i><span className='mt-2'>87</span>

     <i class="icon-posts bi bi-link-45deg"></i><span className='mt-2'>87</span>
 <i class="icon-posts bi bi-box-arrow-up-right"></i><span className='mt-2'>87</span>
    </div>
  </div>
  </div>
  </>)
} 
{isLoading && <div>Loading...</div>}
  </>
}

export default TopPosts