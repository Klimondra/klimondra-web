"use client";
import React from 'react';
import {useUser} from "@clerk/nextjs";

const Page = () => {
    const { user, isLoaded } = useUser();
    return (
        <>
            <h2 className={`text-black font-readex text-4xl font-bold`}>{`Nazdar${isLoaded ? `, ${user.fullName}` : ""}!`}</h2>
        </>
    );
};

export default Page;