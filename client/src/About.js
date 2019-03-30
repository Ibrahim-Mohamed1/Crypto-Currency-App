import React from 'react';
import { SocialIcon } from 'react-social-icons';

const About = () => {
    return (
        <div className="About" >
            <h1 style={{ marginLeft: 10, textAlign: "center", color: "red", fontFamily:"cursive" }}>Ibrahim Mohamed</h1>
            <div style={{ textAlign: "center", margin: 0 }}>
                <SocialIcon rel="noopener noreferrer" target="_blank" url="https://github.com/Ibrahim-Mohamed1" bgColor="white" fgColor="red" style={{ margin: 10 }} network="github" />
                <SocialIcon rel="noopener noreferrer" target="_blank" url="https://www.linkedin.com/in/ibrahim-mohamed-" bgColor="white" fgColor="red" style={{ margin: 10 }} network="linkedin" />
            </div>
            <p style={{ marginLeft: 10, marginRight: 10 }}>
            Aspiring Web Developer making a career switch to pursue life passions. Currently attending a Full-Stack Web Development Program. Problem solving is one of my favorite things to do and using my background in Psychology/Sociology I am fit to make user friendly interface designs.
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
            <p style={{ marginLeft: 10, marginRight: 10, color: "black"}}>
               As a young boy I had a windows 95 computer that i spent all my time on, messing around on MS paint and learning english through the reader rabbit games. Sitting and playing on the computer was a staple of my childhood. Soon after , at the turn of century I began to embark upon my later pursuits which involved the art of chess and runescaping. It is there in these formative years that i first decided to code. after writing several of my first programs in C++, i was given a small loan of one million venezualen to fund my first start up venture. Together, with my comrade, we decided to help improve the buggy nature of the soviet unions self driving transit taxi system. After many months of grueling work, we decided to abandon all hopes and start from scratch. I spearheaded the effort in overwriting all existing software programs and re-coding everything by my own hands in C++. Other than that, i like to build web apps with my buds here at v school. 
            </p>
            <h2 style={{ margin: "5px 10px", display: "inline-block" }}>Built with: <span style={{ fontSize: 15, color:"lime" }}> React, Node.js, MongoDB, Mongoose, Express, HTML, CSS, Javascript, Axios, Chart.js, Chartkick</span></h2>
            <br />
            <h2 style={{ margin: "15px 10px", display: "inline-block" }}>API's used: <span style={{ fontSize: 15, color:"lime" }}>newsapi.org & cryptocompare</span></h2>
        </div>
    );
};

export default About;