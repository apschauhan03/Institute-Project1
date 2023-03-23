import React from 'react'
import defaultIMG from './157347.png'
import './slide.css';
export default function slide() {
  return (
    <div className='slidecontainer'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={defaultIMG} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={defaultIMG} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={defaultIMG} className="d-block w-100" alt="..." />
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
