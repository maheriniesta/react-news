import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
export default function Techcrunch() {
  let [getNewsCrunch,setGetNewsCrunch]=useState([]);
  async function getNewsTechs(){
    
    let {data} = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5165bce6a664437cab0604685c6f8ab5");
    setGetNewsCrunch(data.articles);
  }
  useEffect(()=>{
    getNewsTechs();
  })
  return (
    <>
    <h2 className=' text-center py-5 text-uppercase'>tech crunch</h2>
    <div className="row">
      <div className="col-md-8">
        <div>
          <a href='https://techcrunch.com/2022/08/10/samsungs-new-foldables-arrive-august-26/'><h2 className='textB my-5'>Samsung’s new foldables arrive August 26</h2></a>
          <h3 className=' text-muted mb-3'>The Galaxy Z Flip and Galaxy Z Fold start at $1,000 and $1,800, respectively</h3>
          <img src="./20.webp" alt="" className='w-100 mb-5' />
        </div>
      </div>
      <div className="col-md-4">
        <div>
         <a href="https://techcrunch.com/2022/08/10/nikola-taps-its-president-for-ceo-post/"> <h3 className='textB'>Nikola taps its president for CEO post</h3>
          <p>Jaclyn Trop</p></a>
          <div className='line w-100 my-2'></div>
         <a href="https://techcrunch.com/2022/08/10/cloud-security-startup-wiz-reaches-100m-arr-in-just-18-months/"> <h3 className='textB'>Cloud security startup Wiz reaches $100M ARR in just 18 months</h3>
          <p className='mt-5'>Ron Miller</p></a>
          <div className='line w-100 my-2'></div>
          <a href="https://techcrunch.com/2022/08/09/bmw-hedges-its-ev-bet-appears-poised-to-repeat-mistakes-of-the-past/"><h3 className='textB'>BMW hedges its EV bet, appears poised to repeat mistakes of the past</h3>
          <p className='mt-5'>Tim De Chant</p></a>
         <a href="https://techcrunch.com/2022/08/09/facebook-helps-cops-prosecute-17-year-old-for-abortion/"> <h3 className='textB'>Facebook helps cops prosecute 17-year-old for abortion</h3>
          <p className='mt-5'>Devin Coldewey</p></a>
        </div>
      </div>
    </div>
    <div className='line w-100 my-2'></div>
   <a href="https://techcrunch.com/2022/08/10/5-takeaways-from-coinbases-disappointing-q2-results/"> <div className="row">
      <div className="col-md-4 my-5 px-5">
        <div>
           <h3 className='textB'> 5takeaways from Coinbase’s disappointing Q2 results</h3>
        </div>
      </div>
      <div className="col-md-4 my-5">
        <div>
          <p className=' text-muted'>Coinbase is having to defend its model to investors who may have bought into its stock when it was trading much higher. And per its own notes, the bad times are not about to end any time soon.</p>
        </div>
      </div>
      <div className="col-md-4 my-5">
        <div>
          <img src="./21.webp" alt="" className='w-100 imgPP' />
        </div>
      </div>
    </div></a>
    <div className='line w-100 my-3'></div>
    <a href="https://techcrunch.com/2022/08/10/stark-wants-to-change-the-way-companies-make-websites-and-software-accessible/"><div className="row">
      <div className="col-md-4 my-5 px-5">
        <div>
          <h3 className='textB'>Stark wants to make it easier to design accessible websites and software</h3>
        </div>
      </div>
      <div className='col-md-4 my-5'>
        <div>
          <p className=' text-muted'>Stark is a startup that wants to help designers make the software and websites more accessible for people with disabilities, and they’ve created a set of tools that plug into popular design tools a...</p>
        </div>
      </div>
      <div className="col-md-4 my-5">
        <div>
          <img src="./44.webp" alt="" className='w-100' />
        </div>
      </div>
    </div></a>
    <div className="row">
      {getNewsCrunch.map((crunch,index)=>
      <div className='col-md-4' key={index}>
        <div>
          <img src={crunch.urlToImage} alt="" className='w-100 img--tech'/>
          <h3 className='h6 text-center mt-3'>{crunch.title}</h3>
          <a href={crunch.url} className='btn btn-info text-capitalize mb-3'> see more</a>
        </div>
      </div>
      )}
    </div>
    </>
  )
}
