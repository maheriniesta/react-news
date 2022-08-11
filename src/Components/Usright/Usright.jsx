import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
export default function Usright() {
  let img22 = './22.svg'
  let [getNewsus,setGetNewsUs]=useState([]);
  async function getNewsUsr(){
    let {data} = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5165bce6a664437cab0604685c6f8ab5');
    setGetNewsUs(data.articles);
  }
  
  useEffect(()=>{
    getNewsUsr();
  })
  return (
    <>
    <h2 className=' text-center py-5 text-uppercase textB text-warning'>The Constitution</h2>
    <div className="row mb-5">
      <div className="col-md-9">
        <div>
          <h3 className=' text-warning'>Why a Constitution?</h3>
          <p>The need for the Constitution grew out of problems with the Articles of Confederation, which established a “firm league of friendship” between the States, and vested most power in a Congress of the Confederation. This power was, however, extremely limited—the central government conducted diplomacy and made war, set weights and measures, and was the final arbiter of disputes between the States. Crucially, it could not raise any funds itself, and was entirely dependent on the States themselves for the money necessary to operate. Each State sent a delegation of between two and seven members to the Congress, and they voted as a bloc with each State getting one vote. But any decision of consequence required a unanimous vote, which led to a government that was paralyzed and ineffectual.</p>
          <p>A movement to reform the Articles began, and invitations to attend a convention in Philadelphia to discuss changes to the Articles were sent to the State legislatures in 1787. In May of that year, delegates from 12 of the 13 States (Rhode Island sent no representatives) convened in Philadelphia to begin the work of redesigning government. The delegates to the Constitutional Convention quickly began work on drafting a new Constitution for the United States.</p>
        </div>
      </div>
      <div className="col-md-3">
        <div>
          <ul>
            <a href="https://www.whitehouse.gov/about-the-white-house/our-government/"> <li className='my-5 pt-5 '>OUR GOVERNMENT</li></a>
            <a href="https://www.whitehouse.gov/about-the-white-house/our-government/the-legislative-branch/"> <li>The Legislative Branch</li></a>
            <a href="https://www.whitehouse.gov/about-the-white-house/our-government/the-executive-branch/"> <li>The Executive Branch</li></a>
            <a href="https://www.whitehouse.gov/about-the-white-house/our-government/the-judicial-branch/"> <li>The Judicial Branch</li></a>
            <a href="https://www.whitehouse.gov/about-the-white-house/our-government/elections-and-voting/"> <li>Elections and Voting</li></a>
            <a href="https://www.whitehouse.gov/about-the-white-house/our-government/state-local-government/"> <li>State and Local Government</li></a>

            

            
          </ul>
        </div>
      </div>
    </div>
    <div className="row">
      {getNewsus.map((us,index)=>
      <div className='col-md-4' key={index}>
        <div>
          <img src={us.urlToImage?us.urlToImage:img22} alt=""  className='w-100 img--tech'/>
          <h3 className=' text-center mt-3 h6'>{us.title}</h3>
          <a href={us.url} className='btn btn-info text-capitalize mb-3'> see more</a>
        </div>
      </div>
      )}
    </div>
 
    </>
  )
}
