import React from 'react'
import banner1 from './banner1.jpeg'
import banner2 from './banner2.jpeg'
import './slide.css';
export default function slide() {
  return (
    <div className='slidecontainer'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={banner1} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}
