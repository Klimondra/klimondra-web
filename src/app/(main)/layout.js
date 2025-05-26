import React from 'react';
import NavHeader from "@/components/navigation/NavHeader";
import Footer from "@/components/navigation/Footer";

const MainLayout = ({children}) => {
    return (
        <>
        <NavHeader />
        {children}
        <Footer />
        </>
    );
};

export default MainLayout;