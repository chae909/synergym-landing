import React from 'react';

const Toast = ({ message, show }) => {
    return (
        <div 
            className={`fixed top-20 right-5 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out z-50 ${
                show ? 'translate-x-0' : 'translate-x-[150%]'
            }`}
        >
            <p>{message}</p>
        </div>
    );
};

export default Toast;