import React from "react";
import './Toolbar.css';

export default function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;

    return (
        <nav className="toolbar">
            {filters.map(item => (
                <button onClick={onSelectFilter} 
                        key={item} 
                        className={item === selected ? 'active' : ''}>
                    {item}
                </button>
            ))}
        </nav>
    );
}