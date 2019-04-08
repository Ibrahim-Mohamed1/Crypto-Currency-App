import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom"

const About = () => {
    return (
        <div className="About" >
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
                <Link to="/about" style={{color:"lime"}}>About</Link>
            </div>
            <h1 style={{ marginLeft: 10, textAlign: "center", color: "red", fontFamily:"cursive" }}>Ibrahim Mohamed</h1>
            <div style={{ textAlign: "center", margin: 0 }}>
                <SocialIcon rel="noopener noreferrer" target="_blank" url="https://github.com/Ibrahim-Mohamed1" bgColor="white" fgColor="red" style={{ margin: 10 }} network="github" />
                <SocialIcon rel="noopener noreferrer" target="_blank" url="https://www.linkedin.com/in/ibrahim-mohamed-" bgColor="white" fgColor="red" style={{ margin: 10 }} network="linkedin" />
            </div>
            <p style={{ marginLeft: 10, marginRight: 10, textAlign: "center" }}>
            Full-Stack JavaScript Web Developer seeking to provide lifestyle changing and impactful mobile/web application.
            </p>
            <h1 style={{ marginLeft: 10, textAlign: "center", color: "red", fontFamily:"pure-evil-2" }}>Stuart Gardner</h1>
            <div style={{ textAlign: "center", margin: 0 }}>
                <SocialIcon rel="noopener noreferrer" target="_blank" url="https://github.com/Stgardner" bgColor="white" fgColor="red" style={{ margin: 10 }} network="github" />
                <SocialIcon rel="noopener noreferrer" target="_blank" url="#" bgColor="white" fgColor="red" style={{ margin: 10 }} network="linkedin" />
            </div>
            <p style={{ marginLeft: 10, marginRight: 10, textAlign: "center"}}>
                Dev with a passion for merging the worlds of art and tech. 
            </p>
            <h1 style={{ marginLeft: 10, textAlign: "center", color:'red' }}>Bill Violette</h1>
            <div style={{ textAlign: "center", margin: 0 }}>
                <SocialIcon rel="noopener noreferrer" target="_blank" url="#" bgColor="white" fgColor="gray" style={{ margin: 10 }} network="github" />
                <SocialIcon rel="noopener noreferrer" target="_blank" url="#" bgColor="white" fgColor="gray" style={{ margin: 10 }} network="linkedin" />
            </div>
            <p style={{ marginLeft: 10, marginRight: 10, textAlign: "center"}}>
                Cryptocurrency enthusiast && Aspiring Web Developer 
            </p>
            <h1 style={{ marginLeft: 10, textAlign: "center", color:'red' }}>Abhi Tiwari</h1>
            <div style={{ textAlign: "center", margin: 0 }}>
                <SocialIcon rel="noopener noreferrer" target="_blank" url="http://jaketrent.com" bgColor="black" fgColor="gray" style={{ margin: 10 }} network="github" />
                <SocialIcon rel="noopener noreferrer" target="_blank" url="http://jaketrent.com" bgColor="black" fgColor="gray" style={{ margin: 10 }} network="linkedin" />
            </div>
            <p style={{ marginLeft: 10, marginRight: 10, color: "black", textAlign: "center" }}>
                Aspiring software engineer in love with puzzles and murder mysteries</p>
            <h2 style={{ margin: "5px 10px", display: "inline-block" }}>Built with: <span style={{ fontSize: 15, color:"lime" }}> React, Node.js, MongoDB, Mongoose, Express, HTML, CSS, Javascript, Axios, Chart.js, Chartkick</span></h2>
            <br />
            <h2 style={{ margin: "15px 10px", display: "inline-block" }}>API's used: <span style={{ fontSize: 15, color:"lime" }}>newsapi.org & cryptocompare</span></h2>
        </div>
    );
};

export default About;