import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  let news1 = './maxresdefault.jpg';
  let news2 = './8.webp';
  let news3 = './hero-image-a0d28e8991ec7398d914388a83d78d56.jpg';
  let img1='./1.jpg';
  let img2='./2.jpg';
  let img3='./3.jfif';
  let img4='./4.png';
  let img5='./5.jpg';

  return (
    <>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active bg-danger" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="bg-danger" aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} className="bg-danger" aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={news1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={news3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={news2} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className=' container'>
  <div className="row">
    <div className="col-md-4">
      <div className='mt-5'>
        <div className="card bg-black" style={{width: '18rem'}}>
         <Link to="/wallstreet"> <img src={img1} className="card-img-top w-100 img--h" alt="..."  /></Link>
          <div className="card-body">
            <p className="card-text ">All articles published by the <samp className=' text-danger'>Wall Street</samp>  Journal in the last 6 months, sorted by recent first</p>
          </div>
        </div>

      </div>
      
    </div>
    <div className="col-md-4">
      <div className='mt-5'>
        <div className="card bg-black" style={{width: '18rem'}}>
         <Link to="/techcrunch"> <img src={img2} className="card-img-top w-100 img--h" alt="..."  /></Link>
          <div className="card-body">
            <p className="card-text ">Top headlines from <span className=' text-danger'>Tech Crunch</span>  right now <br/>news</p>
          </div>
        </div>

      </div>
      
    </div>
    <div className="col-md-4">
      <div className='mt-5'>
        <div className="card bg-black" style={{width: '18rem'}}>
         <Link to="/usright"> <img src={img3} className="card-img-top w-100 img--h" alt="..."  /></Link>
          <div className="card-body">
            <p className="card-text ">Top business headlines in the <span className=' text-danger'>US right</span>  now <br/> news</p>
          </div>
        </div>

      </div>
      
    </div>
    <div className="col-md-4 mb-5">
      <div className='mt-5'>
        <div className="card bg-black" style={{width: '18rem'}}>
         <Link to="/appel"> <img src={img4} className="card-img-top w-100 img--h" alt="..."  /></Link>
          <div className="card-body">
            <p className="card-text ">All articles mentioning <span className=' text-danger'>Apple </span> from yesterday, sorted by popular publishers first</p>
          </div>
        </div>

      </div>
      
    </div>
    <div className="col-md-4 mb-5">
      <div className='mt-5'>
        <div className="card bg-black" style={{width: '18rem'}}>
         <Link to="/tesla"> <img src={img5} className="card-img-top w-100 img--h" alt="..."  /></Link>
          <div className="card-body">
            <p className="card-text ">All articles abouts <span className=' text-danger'>Tesla</span>  from the last month, sorted by recent first</p>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</div>


    </>
  )
}
