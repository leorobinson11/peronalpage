import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./footer";
import '../styles/project.css'
import projectdata from '../project_data.json'

const ProjectHeader = () => {
    return (
        <div className="p-header-container">
            <div className="p-links-container" style={{"opacity": 1}}>
                <span> <a href="/personalpage"> Home </a> </span>
            </div>
        </div>
    );
}

const Slide = ({ id, path, isActive }) => {
    return (
      <div className={`slide ${isActive ? 'active' : ''}`}>
        <div clasNames="image-container">
          <img src={require(`../images/${path}${id+1}.png`)} alt="Project Image" class="slide-image" />
        </div>
      </div>
    );
  }

const Article = () => {
    const { index } = useParams();
    const data = projectdata[index]

    // code for the carosel
    const [activeSlide, setActiveSlide] = useState(0);

    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
        }
    };

    const handleSlideChange = (nextSlide) => {
        setActiveSlide(nextSlide);
    };

    return (
        <div className="project-acticle">
            <div className="arctilce-description">
                <div className="article-text">
                    <div id="article-text-paragraph">
                        <h1> {data.title} </h1>
                        <p> {data.text} </p>

                        <div className="tag-container">
                            {data.tags.map((tag) => (<span className="tag"> {tag} </span> ))}
                        </div>

                    </div>

                    <div id="github-link">
                        <div className="icon-container" onClick={() => window.open(data.link)}> <FaGithub className="icon"/> </div>
                    </div>
                </div>
        
                <div className="article-slides">
                    <Carousel 
                        responsive={responsive}
                        arrows={true} 
                        swipeable={true}
                        draggable={true}
                        afterChange={(previousSlide, { currentSlide }) => handleSlideChange(currentSlide)}
                    >
                        {Array.from({ length: data.imagenumber }).map((_, idx) => ( <Slide key={idx} id={idx} path={data.imagepath} isActive={idx === activeSlide}/> ))}
                    </Carousel>
                </div>            
            </div>
        </div>
    )
}

const Project = () => { 
    return (
      <header className="App">
          <ProjectHeader />
          <Article />
          <Footer />
      </header>
    )
  }

export default Project;