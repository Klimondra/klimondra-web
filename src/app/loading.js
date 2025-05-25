import React from 'react';

const Loading = () => {
    return (
        <div className={"w-full h-svh flex items-center justify-center bg-gradient-to-br from-bgDark via-primaryBlue-900 to-bgDark backdrop-blur-lg"}>
            <h2 className={`text-white font-readex font-bold text-5xl`}>Načítání...</h2>
        </div>
    );
};

export default Loading;