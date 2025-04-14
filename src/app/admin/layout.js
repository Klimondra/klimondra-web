// app/admin/layout.js
"use client"
import { SessionProvider } from "next-auth/react";

const AdminLayout = ({ children }) => {
    return (
        <html lang="cs" suppressHydrationWarning>
        <head>
            <meta charSet="utf-8" />
            <title>Admin</title>
        </head>
        <body>
        <SessionProvider>
            {children}
        </SessionProvider>
        </body>
        </html>
    );
};

export default AdminLayout; // Ujisti se, že je to defaultní export
