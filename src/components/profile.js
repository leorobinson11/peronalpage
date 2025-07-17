import React from "react";
import "../styles/profile.css"
import ProfilePicture from "../images/profile.png"

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";



const ProfileCard = () => {
    return (
        <div className="profile-card"> 
            <div className="profile-image">
                <img src={ProfilePicture} alt="profile-picture" className="profile-picture"/>
            </div>

            <div className="profile-info">
                <span> Leo Robinson </span>
                <span> Developer </span>
                <span> KienSon - Digital </span>
            </div>
        </div>  
    )
}

const Socials = () => {

    return (
        <div className="socials">
            <div className="icons">
                <div className="icon-container" onClick={() => window.open("https://wa.me/+436787810316")}> <FaWhatsapp className="icon"/> </div>
                <div className="icon-container" onClick={() => window.open("https://www.instagram.com/rleo228/")}> <FaInstagram className="icon"/> </div>
                <div className="icon-container" onClick={() => window.open("https://www.linkedin.com/in/leo-robinson-437a46283/")}> <FaLinkedinIn className="icon"/> </div>
                <div className="icon-container" onClick={() => window.open("")}> <CgWebsite className="icon"/> </div>
            </div>  
        </div>
    )
}

const Decription = () => {
    return (
        <div className="profile-description">
            <div className="description-block">
                <h1> About me </h1>
                <ul> 
                    <li> Currently pursuing a bachelor degree in physiks and a degree in mathmatiks  </li>
                    <li> Fluent in English and German </li>
                    <li> Experienced Programmer in Python, C, C++ and Javaskript  </li>
                    <li> Specialize in sientifc computing aswell as web development </li>
                </ul>
            </div>

            <div className="description-block">
                <h1> Job experience </h1>
                <ul> 
                    <li> Programmer for the Austrian Bundesheer - Project Schutzschild </li>
                    <li> Freelance work in a multiple tech related areas </li>
                    <li> Co-founder webdevopment of a agency </li>
                </ul>
            </div>
               
        </div>
    )
}

const Profile = () => {
    return (
        <section id="profile">
            <div  className="profile-section"> 
                <div className="card-socials-container">
                    <ProfileCard />
                    <Socials />
                </div>
                <Decription />
            </div>
        </section>
    )
};

export default Profile;