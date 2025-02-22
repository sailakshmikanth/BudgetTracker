import React from 'react';
import './Poppers.css'; // Import the CSS file for animations

const Poppers = () => {
    // Generate a random position for the popper
    const randomPosition = Math.random() * 100; // Random percentage for horizontal position

    return (
        <div className="popper" style={{ left: `${randomPosition}%` }}>
            🎉
        </div>
    );
};

export default Poppers;
