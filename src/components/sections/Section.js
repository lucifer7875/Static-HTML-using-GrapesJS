import React from 'react';
import Column from './Column';

const Section = ({ columns, key, widgets, onAddColumn, onRemoveColumn }) => {
    return (
        <div className="section">
            {columns.map((column, index) => (
                <Column key={index} widgets={column.widgets} />
            ))}
            <button onClick={onAddColumn}>Add Column</button>
            <button onClick={onRemoveColumn}>Remove Column</button>
        </div>
    );
};

export default Section;