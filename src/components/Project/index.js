import React from "react";

function Project(props) {
    return (
        
        <div className="col-lg-4 col-sm-12 text-center p-2">
            <h5 className="text-center p-2 align-items-center">
                {props.name}
            </h5>
            <a href={props.link} target="_blank">
                <img src={props.image} className="img-fluid float-start p-1 glow" id="wander"></img></a>
            <figcaption>
                <p className="text-center p-2">{props.description}</p>
                <a href={props.github} target="_blank"><i
                    className="fab fa-github fa-2x p-1"></i></a>
            </figcaption>
        </div>

    )
}

export default Project;