import React from 'react';
import Widget from './Widget';

const Column = ({ widgets }) => {
    return (
        <div className="column">
            {widgets.map((widget, index) => (
                <Widget key={index} content={widget.content} />
            ))}
        </div>
    );
};

export default Column;