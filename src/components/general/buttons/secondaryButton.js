import React from 'react';

const SecondaryButton = ({className, onClick, label}) => {
    return (
        <button
            onClick={onClick}
            className={`text-white font-readex text-base py-2 px-4 rounded-lg border-3 border-primaryBlue
                        hover:brightness-110 hover:scale-102 active:scale-98 active:brightness-99 transition-all duration-200
                        ${className || ''}`}
        >
            {label}
        </button>
    );
};

export default SecondaryButton;