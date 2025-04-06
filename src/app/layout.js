"use client"
import "./Globals.css";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="cs" suppressHydrationWarning>
        <head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>
            <title>Klimondra</title>

            <meta property="og:title" content="Klimondra - Oficiální web"/>
            <meta property="og:description" content="Nevím proč by ti někdo posílal odkaz na můj web, ale vítej!"/>
            <meta property="og:image" content="%PUBLIC_URL%/social-preview.png"/>
            <meta property="og:url" content="https://klimondra.imbus.org"/>
            <meta property="og:type" content="website"/>
        </head>
        <body>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
