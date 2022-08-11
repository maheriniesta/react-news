import React from 'react'

export default function Footer() {
  return (
    <footer className="footer py-5 ">
  <div className="container">
    <h2 className="text-uppercase text-white mb-4 footer--h2">maher saif news</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="footer--item d-flex">
          <i className="fa-solid fa-location-dot footer--i fs-2 me-2 mt-1" />
          <p className="footer--pra text-capitalize">college academy tariq shreem</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer--item d-flex">
          <i className="fa-solid fa-phone footer--i fs-3 me-2" />
          <p className="footer--pra">Tel: <a href="#" className="text-white">0599123456</a>, <a href="#" className="text-white">0566123456</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer--item d-flex">
          <i className="fa-solid fa-envelope footer--i fs-3 me-2" />
          <p className="footer--pra">Emil: <a href="#" className="text-white">maher@gmail.com</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer--item d-flex">
          <i className="fa-solid fa-envelope footer--i fs-3 me-2" />
          <p className="footer--pra"><a href="#" className="text-white text-capitalize">p.o.box 14,nablus,palestine</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer--item d-flex">
          <i className="fa-solid fa-message footer--i fs-3 me-2" />
          <p className="footer--pra">fax: <a href="#" className="text-white">+123456789</a>,<a href="#" className="text-white">+123456789</a></p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer--item d-flex">
          <i className="fa-solid fa-globe footer--i fs-3 me-2" />
          <p className="footer--pra">web site: <a href="#" className="text-white">href//maher.com</a></p>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}
