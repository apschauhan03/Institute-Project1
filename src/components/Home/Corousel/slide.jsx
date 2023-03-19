import React from 'react'
// import "./slide.css"
export default function slide() {
  return (
    <div className='slidecontainer'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2020/07/02/04/31/matrix-5361690_1280.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2019/03/03/14/38/hacker-4031973_1280.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/05/10/12/41/hacker-2300772_1280.jpg" className="d-block w-100" alt="..." />
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
