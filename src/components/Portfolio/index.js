import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => { 


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div></div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;