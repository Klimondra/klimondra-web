import React from 'react';
import {ClerkProvider} from "@clerk/nextjs";
import AdminSidebar from "@/components/navigation/adminSidebar";

const AdminLayout = ({children}) => {
    return (
        <ClerkProvider>
            <main className={`w-full min-h-svh flex flex-col md:flex-row`}>
                <AdminSidebar/>
                <section className={`flex-1 p-6 overflow-auto`}>
                    {children}
                </section>
            </main>
        </ClerkProvider>
    );
};

export default AdminLayout;
