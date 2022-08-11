import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
export default function Tesla() {
  let imgTesla='./5.jpg';
  let [getTestaCars,setGetTestaCars]=useState([]);
  async function getTeslaCar(){
    let {data}=await axios.get(' https://newsapi.org/v2/everything?q=tesla&from=2022-07-09&sortBy=publishedAt&apiKey=5165bce6a664437cab0604685c6f8ab5');
    setGetTestaCars(data.articles);
  }
  useEffect(()=>{
    getTeslaCar();
  },[])

  return (
    <>
   

    <div>
    <h2 className=' text-center py-5 text-capitalize'>tesla</h2>
    <div className='tesla'>
      <div className='pt-5'>
        <h2 className='text-center  text-dark '>Model 3</h2>
          <p className='text-center text-dark py-4'>Order Online for <a href="https://www.tesla.com/support/taking-delivery?redirect=no"> <span className='lan'>Touchless Delivery</span></a> </p>
      </div>
      <div className=' vh-100 d-flex justify-content-center align-items-center'>
        
        <div className=' mt-5 pt-5  '>
          
          <div>
          <a href='https://www.tesla.com/model3/design#overview' className='btn btn-dark px-5 bord me-3'>Custom Order</a>
          <a href='https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=95113&range=200' className='btn bg--ss px-4 bord ms-3'>Existing Inventory</a>

          </div>
        </div>
      </div>

    </div>
    </div>

    <div className="row">
      {getTestaCars.map((Tesla,index)=>
      <div className='col-md-3' key={index}>
        <div>
          <img src={Tesla.urlToImage?Tesla.urlToImage:imgTesla} alt="" className='w-100 img--h'/>
          <h3 className='h6 mt-3 text-center'>{Tesla.title}</h3>
          <a href={Tesla.url} className='btn btn-info text-capitalize mb-3'> see more</a>
        </div>
      </div>
      )}
    </div>
    </>
  )
}
