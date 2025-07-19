import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/portfolio.css"

import Stellar from '../images/projects/stellarsymulation/1.png'
import MD from '../images/projects/molecular-dynamics/1.png'
import Graphql from '../images/projects/graphql/1.png'
import Chess from '../images/projects/chess/1.png'
import Buisness from '../images/projects/buissness/1.png'
import Polynomial from '../images/projects/polynomial/1.png'


const ProjectCard = ({ title, img, index }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('projects/'+index);
    };

    return (
        <div className="project-card"  onClick={handleClick}> 
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
        let newProjects;
        if (!showAll) {
            if (window.matchMedia("(max-width: 640px)").matches) {
                newProjects = allprojects.slice(0, 3);
            } else if (window.matchMedia("(max-width: 950px)").matches) {
                newProjects = allprojects.slice(0, 4);
            } else {
                newProjects = allprojects;
            }
        } else {
            newProjects = allprojects;
        }
    
        setProjects(newProjects);
    };

    useEffect(() => {
        updateProjects(); // run on mount
        
        /*
        window.addEventListener("resize", updateProjects);
        return () => {
            window.removeEventListener("resize", updateProjects);
        };
        */
    }, []);

    useEffect(() => {
        updateProjects(); // run whenever showAll changes
    }, [showAll]);

    const toggle = () => {
        setShowAll(prev => !prev);
    }


    
    return (
        <section id="portfolio">
            <div className="portfolio-section">
                <h1> My Projects </h1>
                <div className="card-container"> 
                    {projects.map((project, idx) => (
                        <ProjectCard title={project.title} img={project.img} index={idx}/>
                    ))}
                </div>
                <span className="more-btn" onClick={toggle}>
                    {showAll ? "- View Less" : "+ View More"}
                </span>
            </div>
        </section>
    )
};

export default Portfolio; 