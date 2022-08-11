import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
    
  return (
    <>
    <h2 className=' text-center py-5 text-capitalize'>about</h2>

   <section className="about py-5">
  <div className="container">
    <div className="row about--bordar py-3">
      <div className="col-md-4 position-relative">
        <div className="abut--item w-100 py-2 ms-auto">
          <div className="about--img" />
        </div>
        <div className="about--v"><a href="#"> <i className="fa-solid fa-play " /></a></div>
      </div>
      <div className="col-md-6 py-5 mt-3 ms-5">
        <h2 className="text-capitalize text-white fs-1 about--h">maher saif <br /> news</h2>
        <p className="text-capitalize py-2 about--p text-white">this is maher saif news web all news in the woarld  </p>
       <Link to = "/home"> <button className="btn bg-white  px-5 fs-5 text-primary about--btn">more info <i className="fa-solid fa-right-long ms-3" /></button></Link>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
