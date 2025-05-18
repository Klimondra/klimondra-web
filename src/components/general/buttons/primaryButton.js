import React from 'react';

const PrimaryButton = ({className, onClick, label}) => {
    return (
        <button
            onClick={onClick}
            className={`bg-primaryBlue-500 text-white font-readex text-base py-2 px-4 rounded-lg 
                        hover:bg-primaryBlue-600 hover:scale-102 hover:-rotate-1 active:bg-primaryBlue-700 transition-all duration-200
                        ${className || ''}`}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;