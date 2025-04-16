// app/admin/layout.js
"use client"
import { SessionProvider } from "next-auth/react";

const AdminLayout = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    );
};

export default AdminLayout; // Ujisti se, že je to defaultní export
