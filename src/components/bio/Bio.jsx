import React from "react";
import './bio.css';
const Bio = ({imgUrl,title,name,grade,major,about}) =>{
    return(
        <div className="chess__officers-container_bio">
            <div className="chess__officers-container_bio-image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="chess__officers-container_bio-about">
                <h1>{title}</h1>
                <h3>{name}</h3>
                <h3>Grade: {grade}</h3>
                <h3>Major: {major}</h3>
                <p>{about}</p>
            </div>
        </div>
    )
}
export default Bio;