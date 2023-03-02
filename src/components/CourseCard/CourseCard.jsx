import React from "react";
import './CourseCard.css';


function CourseCard(props) {

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.imgUrl} />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-body">
                    <p>{props.content}</p>
                </div>
            </div>
            <div className="btn">
                <button>
                    <a href={props.link}>Read More</a>
                </button>
            </div>
        </div>
    );
}

export default CourseCard;