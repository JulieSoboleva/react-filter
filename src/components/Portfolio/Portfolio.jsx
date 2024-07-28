import { useState } from 'react';
import json from '../../data/projects.json';
import Toolbar from '../Toolbar/Toolbar';
import ProjectsList from '../ProjectsList/ProjectsList';
import './Portfolio.css';

export default function Portfolio() {
    const filterButtonList = ['All', 'Websites', 'Flayers', 'Business Cards'];

    const [filteredProjects, setFilteredProjects] = useState(json);
    const [selected, setSelected] = useState('All');

    const filter = (evt) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(item => item.classList.remove('active'));
        
        evt.target.classList.add('active');

        const select = evt.target.textContent;
        
        if (select === 'All') {
            setFilteredProjects(json);
        } else {
            setFilteredProjects(
                json.filter(item => item.category === select)
            );
        }

        setSelected(select);
        console.log(select);
    }

    return (
        <div className="container">
            <Toolbar
                filters={filterButtonList}
                selected={selected}
                onSelectFilter={filter}
            />

            <div className="gallery">
                <ProjectsList projects={filteredProjects}/>
            </div>
        </div>
    );
}