import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/skills.css';

const Skills = () => {
    return (
        <div className='skills-container'>
            <h1 className='skills-header'>
                <span>M</span>
                <span>y</span>
                <span> </span>
                <span>S</span>
                <span>k</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>s</span>
            </h1>
            <div className='skills-list'>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item className='list-item' as="li">HTML</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">CSS</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">JavaScript</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">PHP</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">React</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">Laravel</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">Java</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">C</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">C++</ListGroup.Item>
                    <ListGroup.Item className='list-item' as="li">C#</ListGroup.Item>
                </ListGroup> 
            </div>
             
        </div>
        
    );
};

export default Skills
