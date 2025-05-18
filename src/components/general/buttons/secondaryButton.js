import React from 'react';

const SecondaryButton = ({className, onClick, label}) => {
    return (
        <button
            onClick={onClick}
            className={`text-white font-readex text-base py-2 px-4 rounded-lg border-3 border-primaryBlue
                        hover:border-primaryBlue-600 hover:scale-102 hover:-rotate-1 active:border-primaryBlue-700 transition-all duration-200
                        ${className || ''}`}
        >
            {label}
        </button>
    );
};

export default SecondaryButton;