import React, { useState } from 'react';
import './BunButton.css';

interface BunButtonProps {
    employeeId: number;
}

const BunButton: React.FC<BunButtonProps> = ({ employeeId }) => {
    const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);

    const toggleOptions = (e: React.MouseEvent<HTMLButtonElement>) => { // Type the event
        e.stopPropagation();
        setIsOptionsOpen(!isOptionsOpen);
    };

    const handleOptionClick = (option: string) => { // Type the option parameter
        setIsOptionsOpen(false);
        if (option === 'edit') {
            console.log(`Edit employee with ID: ${employeeId}`);
            // Implement edit logic
        } else if (option === 'flag') {
            console.log(`Flag employee with ID: ${employeeId}`);
            // Implement flag logic
        } else if (option === 'delete') {
            console.log(`Delete employee with ID: ${employeeId}`);
            // Implement delete logic
        }
    };

    return (
        <div className="bun-button-container">
            <button className="bun-button" onClick={toggleOptions}>
                ...
            </button>
            {isOptionsOpen && (
                <div className="bun-options-menu">
                    <button onClick={() => handleOptionClick('edit')}>Edit</button>
                    <button onClick={() => handleOptionClick('flag')}>Flag</button>
                    <button onClick={() => handleOptionClick('delete')}>Delete</button>
                </div>
            )}
        </div>
    );
};

export default BunButton;