import React, { useEffect, useRef, useState } from 'react';
import Earth from '../images/plannets/earth.png'
import Saturn from '../images/plannets/saturn.png'
import Neptune from '../images/plannets/neptune.png'
import Jupiter from  '../images/plannets/jupiter.png'
import Mars from '../images/plannets/mars.png'
import Mercury from '../images/plannets/mercury.png'
import '../styles/hero.css'

const TypingEffect = ({ text, speed = 150, delay = 1000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [typing, setTyping] = useState(true);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (typing) {
        if (index < text.length) {
          setTimeout(() => {
            setDisplayedText(text.slice(0, index + 1));
            setIndex(index + 1);
          }, speed);
        } else {
          setTimeout(() => setTyping(false), delay);
        }
      } else {
        if (index > 0) {
          setTimeout(() => {
            setDisplayedText(text.slice(0, index - 1));
            setIndex(index - 1);
          }, speed);
        } else {
          setTimeout(() => setTyping(true), delay);
        }
      }
    }, [index, typing, text, speed, delay]);
  
    return (
      <div>
        {displayedText}
        <span className="cursor">|</span>
      </div>
    );
};


const Planet = ({angle, name}) => {
  const imageRef = useRef(null);

  useEffect(() => {    
    const image = imageRef.current;
    var radiusX;
    var radiusY;

    var centerX;
    var centerY;


    const speed = 0.01;

    const animate = () => {
      if (window.innerWidth < 700) {
        radiusX = 150;
        radiusY = 150;
        centerX = 130; 
        centerY = 125; 
      } else if (window.innerWidth < 1200) {
        radiusX = 280;
        radiusY = 160;
        centerX = 180; 
        centerY = 175; 
      } else {
        radiusX = 280;
        radiusY = 80;
        centerX = 180; 
        centerY = 175; 
      }

      angle += speed;
      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);


  return (
    <img
      ref={imageRef}
      src={name}
      alt="Earth"
      class="Planet"
    />
  )
}


const Solarsystem = () => {
  return (
    <div class="solarsystem">
      <Planet angle={0} name={Mercury} />
      <Planet angle={1} name={Jupiter} />
      <Planet angle={2} name={Saturn} />
      <Planet angle={3.2} name={Neptune} />
      <Planet angle={4.1} name={Mars} />
      <Planet angle={5.1} name={Earth} />
    </div>
  );
};


const Hero = () => {
    return (
        <section id="hero">
            <div class="hero-title">
                <h1> Hello, I'm <span style={{color:"red"}}>Leo</span>. <br/> <TypingEffect text={"I'm a developer."}/> </h1>
            </div>
            <Solarsystem class="solarsystem" />
        </section>
    )
}
    

export default Hero;