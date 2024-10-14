import React from 'react';
import './styles/about.css';

const About = () => {
  return (
        <div className="about-container">
            <h1 className='about-header'>
                <span>A</span>
                <span>b</span>    
                <span>o</span> 
                <span>u</span> 
                <span>t </span> 
                <span>M</span> 
                <span>e</span>
            </h1>
            <p>I'm Eugene P. Gargantilla, and I'm glad you're here. I am a passionate developer with a deep fascination 
                <span style={{color: "hsl(271, 93%, 54%)"}}> exploring new technologies and expanding my knowledge</span> through hands-on 
                experience. My hobbies include reading books and immersing myself in the 
                world of literature, as well as watching movies and anime, which allow me to explore diverse stories 
                and perspectives.
                <br></br><br></br>I come from a humble, hardworking family—not too rich, not too poor—and that has 
                shaped my values and work ethic. Currently, I’m pursuing a <span style={{color: "hsl(271, 93%, 54%)"}}>degree in Computer Science</span>, with a strong 
                desire to continuously learn and grow in the tech field.
                <br></br><br></br>Looking ahead, I’m also interested in education. After retiring from the tech 
                industry, I aspire to <span style={{color: "hsl(271, 93%, 54%)"}}>share my knowledge and experiences</span> by teaching the next generation of developers. 
                Empowering others with the skills to succeed in technology is a long-term goal that I'm excited about.</p>
        </div>
  );    
}

export default About;
