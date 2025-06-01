import React from 'react';
import {ClerkProvider} from "@clerk/nextjs";
import AdminSidebar from "@/components/navigation/adminSidebar";

const AdminLayout = ({children}) => {
    return (
        <ClerkProvider>
            <main className={`w-full h-svh flex flex-col md:flex-row relative overflow-hidden`}>
                <AdminSidebar/>
                <section className={`flex-1 p-6 overflow-y-auto overflow-x-hidden`}>
                    {children}
                </section>
            </main>
        </ClerkProvider>
    );
};

export default AdminLayout;