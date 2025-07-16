import React, { useState, useEffect } from "react";
import "../styles/portfolio.css"

import Stellar from '../images/projects/stellarsymulation.png'
import MD from '../images/projects/molecular-dynamics.png'
import Graphql from '../images/projects/graphql.png'
import Chess from '../images/projects/chess.png'
import Buisness from '../images/projects/buissness.png'
import Polynomial from '../images/projects/polynomial.png'


const ProjectCard = ({ title, img }) => {
    return (
        <div className="project-card"> 
            <img src={img} alt="project-image" className="project-image"/>
            <span className="project-title"> {title} </span>
        </div>
    )
}

const Portfolio = () => {
    const allprojects = [
        { title: "Stellar Symulation", img: Stellar},
        { title: "Molecular Dynamics", img: MD},
        { title: "Graphql Security Tool", img: Graphql },
        { title: "Chess interface", img: Chess },
        { title: "Buisness Homepage", img: Buisness },
        { title: "Polynomial Interpolation", img: Polynomial }
        
    ]

    const [showAll, setShowAll] = useState(false);
    const [projects, setProjects] = useState(allprojects);

    const updateProjects = () => {
        if (!showAll) {
            if (window.matchMedia("(max-width: 640px)").matches) {
                setProjects(allprojects.slice(0,3));
            } else if (window.matchMedia("(max-width: 950px)").matches) {
                setProjects(allprojects.slice(0,4));
            }  else {
                setProjects(allprojects)
            }
        } else {
            setProjects(allprojects)
        }
    }

    const toggle = () => {
        setShowAll(prev => !prev);
        if (showAll) {
            document.getElementById("more-btn").innerHTML = "+ View More"
        } else {
            document.getElementById("more-btn").innerHTML = "- View Less"
        }
            
        updateProjects();
    }

    useEffect(() => {
        updateProjects();
        window.addEventListener("resize", updateProjects);
        return () => {
            window.removeEventListener("resize", updateProjects)
        }
    }, [projects])

    
    return (
        <section id="portfolio">
            <div className="portfolio-section">
                <h1> My Projects </h1>
                <div className="card-container"> 
                    {projects.map((project) => (
                        <ProjectCard title={project.title} img={project.img}/>
                    ))}
                </div>
                <span class="more-btn" id="more-btn" onClick={toggle}> + View More </span>
            </div>
        </section>
    )
};

export default Portfolio; 