import React from "react";
// import CourseCard from '../../CourseCard/CourseCard'
import "./CourseTile.css";

export default function Coursestile() {
  // const course= {
  //     title: "Course Name",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //     imgUrl:"https://cdn.pixabay.com/photo/2017/01/01/14/39/hacker-1944688_1280.jpg"
  //   };
  // const [count, setCount] = useState(0)

  return (
    <div className="coursetile">
     <div className="course-heading">
        <h1>Courses</h1>
      </div> 
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card  " style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex   justify-content-around">
              <div className="card  " style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://source.unsplash.com/collection/190727/1600x900"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Course title</h5>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
