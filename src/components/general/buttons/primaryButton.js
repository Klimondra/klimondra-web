import React from 'react';

const PrimaryButton = ({className, onClick, label}) => {
    return (
        <button
            onClick={onClick}
            className={`bg-gradient-to-br from-primaryBlue-400 to-primaryBlue-500 border-1 border-primaryBlue-600/10 text-white font-readex text-base py-2 px-4 rounded-lg 
                        hover:scale-102 hover:shadow-lg hover:border-primaryBlue-500/15 hover:brightness-107 
                        active:scale-98 active:brightness-99 transition-all duration-200
                        ${className || ''}`}
        >
            {label}
        </button>
    );
};

export default PrimaryButton;