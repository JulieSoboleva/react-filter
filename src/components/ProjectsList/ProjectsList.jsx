import React from 'react';
import './ProjectsList.css';

export default function ProjectsList({ projects }) {
    let index = 0;

    return (
        projects.map(item => (
            <div className="project__img" key={index++}>
                <img src={item.img} alt="" />
            </div>
        ))
    );
}