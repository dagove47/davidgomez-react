import React from "react";
import video1 from "../assets/video.mp4";
import "../styles/HomeVideo.css";

export const HomeVideo = () => {

    return(
        <div className="video-container">
            <video autoPlay muted loop>
                <source src={video1} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="title-home neonTextFlicker">
                <h1>Hi,
                <br/>I'm David,
                <br/>web developer</h1>
            </div>
        </div>
    )
}