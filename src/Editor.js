import React, { useState } from 'react';
import Section from './components/sections/Section';

const Editor = () => {
    const [sections, setSections] = useState([]);


    const addSection = () => {
        const newSection = {
            columns: [
                {
                    widgets: [],
                },
            ],
        };
        setSections([...sections, newSection]);
    };

    const removeSection = (sectionIndex) => {
        setSections((prevSections) => {
            const updatedSections = [...prevSections];
            updatedSections.splice(sectionIndex, 1);
            return updatedSections;
        });
    };

    const addColumn = (sectionIndex) => {
        console.log("19", sectionIndex)
        const newColumn = { widgets: [] };
        setSections((prevSections) => {
            const updatedSections = [...prevSections];
            updatedSections[sectionIndex].columns.push(newColumn);
            return updatedSections;
        });
    };

    const removeColumn = (sectionIndex, columnIndex) => {
        console.log("28", sectionIndex, columnIndex)
        setSections((prevSections) => {
            const updatedSections = [...prevSections];
            updatedSections[sectionIndex].columns.splice(columnIndex, 1);
            return updatedSections;
        });
    };

    const addWidget = (sectionIndex, columnIndex) => {
        const newWidget = { content: 'New Widget Content' };
        setSections((prevSections) => {
            const updatedSections = [...prevSections];
            updatedSections[sectionIndex].columns[columnIndex].widgets.push(newWidget);
            return updatedSections;
        });
    };

    const removeWidget = (sectionIndex, columnIndex, widgetIndex) => {
        setSections((prevSections) => {
            const updatedSections = [...prevSections];
            updatedSections[sectionIndex].columns[columnIndex].widgets.splice(widgetIndex, 1);
            return updatedSections;
        });
    };


    return (
        <div className="editor">
            <button onClick={addSection}>Add Section</button>
            <button onClick={removeSection}>Remove Section</button>
            {sections.map((section, sectionIndex) => (
                <Section key={sectionIndex} columns={section.columns}
                    onAddColumn={() => addColumn(sectionIndex)}
                    onRemoveColumn={() => removeColumn(sectionIndex, section.columns.length - 1)}>

                    {section.columns.map((column, columnIndex) => (
                        <div key={columnIndex}>
                            <button onClick={() => addWidget(sectionIndex, columnIndex)}>Add Widget</button>
                            <button onClick={() => removeWidget(sectionIndex, columnIndex, column.widgets.length - 1)}>Remove Widget</button>
                        </div>
                    ))}
                </Section >
            ))}
        </div>
    );
};

export default Editor;
