import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
export default function Appel() {
  let [getAppel,setAppel]=useState([]);
  async function getNewsAppel(){
    let {data} = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2022-08-07&to=2022-08-07&sortBy=popularity&apiKey=5165bce6a664437cab0604685c6f8ab5');
    setAppel(data.articles);
  }

  useEffect(()=>{
    getNewsAppel();
  })

  return (
    <>
    <h2 className=' text-center py-5 text-capitalize'>appel</h2>
    <div className='mb-5'>
      <a href="https://www.apple.com/us-edu/shop/back-to-school"><img src="./23.png" alt="" className='w-100 vh-100' /></a>
    </div>
    
    <div className="row">
      {getAppel.map((appel,index)=>
      <div className='col-md-3' key={index}>
        <div>
          <img src={appel.urlToImage} alt="" className='w-100 img--h'/>
          <h3 className='h6 mt-3 text-center'>{appel.title}</h3>
          <a href={appel.url} className='btn btn-info text-capitalize mb-3'> see more</a>

        </div>
      </div>
      )}
    </div>
    </>
  )
}
 