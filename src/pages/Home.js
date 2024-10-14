import React from 'react';
import './styles/home.css';

const Home = () => {
    return (
        <div className="home-container">
            <h4 className="welcome-header">Welcome to My Profile!</h4>
            <h2 className="hello-header">
                <span>H</span>
                <span>e</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
                <span>,</span>
                <span> </span>
                <span>I</span>
                <span>'</span>
                <span>m</span>
                <span> </span>
                <span>E</span>
                <span>u</span>
                <span>g</span>
                <span>e</span>
                <span>n</span>
                <span>e</span>
            </h2>
            <p>I am <span style={{color: "hsl(271, 93%, 54%)"}}>Eugene P. Gargantilla</span>, a passionate developer undertaking a <span style={{color: "hsl(271, 93%, 54%)"}}>Computer Science Course. </span> 
                My career goal is to leverage my fresh knowledge and experience in various <span style={{color: "hsl(271, 93%, 54%)"}}>programming languages </span>  
                to create innovative and efficient <span style={{color: "hsl(271, 93%, 54%)"}}>software, websites, or solutions </span> that enhance user experiences 
                and push business success. I aspire to continuously improve and expand my development skills and 
                knowledge while <span style={{color: "hsl(271, 93%, 54%)"}}>collaborating in agile teams</span> and ultimately taking the mantle of <span style={{color: "hsl(271, 93%, 54%)"}}>leadership roles where </span>
                I can mentor emerging developers in the industry.
            </p>
        </div>    
    );
};

export default Home;

