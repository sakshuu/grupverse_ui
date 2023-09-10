import React from 'react'
import "./../assets/css/teams.css"
import { aiims, current, nor, om, photography, quill, space } from '../assets/img/teams'
import { ai, csk, surva } from '../assets/img/posts'


const Teams = () => {

    const person =[

        {
            img:quill,
            name:"Quill On Canvas"
        },
        {
            img:nor,
            name:"norMEME"
        },
        {
            img:space,
            name:"Space"
        },
        {
            img:current,
            name:"Current Affairs"
        },
        {
            img:aiims,
            name:"Aiims Bhubaneswar"
        },
        {
            img:current,
            name:"Fashion"
        },
        {
            img:current,
            name:"MedTerms"
        },
        {
            img:photography,
            name:"Photography"
        },
        {
            img:current,
            name:"Indian Politics"
        },
        {
            img:ai,
            name:"AI"
        },
        {
            img:current,
            name:"AAIIMS canteen"
        },        
        {
            img:current,
            name:"Football memes"
        },        
        {
            img:current,
            name:"Stock Market01"
        },
    ]
    const global =[
        {
            img:om,
            name:"omniscient"
        },
{
    img:current,
    name:"Bighnesh"
},
{
    img:current,
    name:"Madburiya"
},
{
    img:current,
    name:"Dona Maria"
},
{
    img:current,
    name:"Haripriya"
},
{
    img:csk,
    name:"nuhmanpt"
},
{
    img:current,
    name:"MiaBardot"
},
{
    img:current,
    name:"Ritu"
},
{
    img:current,
    name:"Ravibhaeathi"
},
{
    img:surva,
    name:"Suvro"
},
{
    img:current,
    name:"Sooraj_Nanda"
},
{
    img:current,
    name:"Noname"
},
{
    img:current,
    name:"PREM SAI RAO"
}

    ]

  return <>
        <h5 className='heading dark mt-4 mb-4'>Top Teams of the week</h5>
        <div className="card scroll">
            {
person.map(item => <>
<div className='main-content'>
<img src={item.img} width={55} alt="" />
<h6>{item.name}</h6>
<button type="button" class="btn btn-sm btn-danger ms-auto">Join</button>
</div>
</>)
            }
        </div>



        <h5  className='heading dark mt-4 mb-4'>Top Global Users of the week</h5>
        <div className="card scroll">
            {
global.map(item => <>
<div className='main-content'>
<img src={item.img} width={55} alt="" />
<h6>{item.name}</h6>
<button type="button" class="btn btn-sm btn-danger ms-auto">Follow</button>
</div>
</>)
            }
        </div>
  </>
}

export default Teams