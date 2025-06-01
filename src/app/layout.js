import "./globals.css";

export const metadata = {
    title: "Klimondra",
    description: "Webová stránka nadšence do technologií a programování Ondřeje Klímy",
    icons: {
        icon: "/logos/K-pixel-logo-blue.svg",
    },
    keywords: ["Klimondra", "Ondřej Klíma"],
    openGraph: {
        title: "Klimondra - Web",
        description: "Webová stránka nadšence do technologií a programování Ondřeje Klímy",
        locale: "cs_CZ",
        type: "website",
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>
      { /* <div className="w-screen h-screen bg-gradient-to-br from-bgDark via-primaryBlue-900 to-bgDark backdrop-blur-l flex justify-center items-center">
            <h1 className={"font-readex text-5xl text-white"}>Něco se chystá 👀</h1>
        </div> */ }
        {children}
      </body>
    </html>
  );
}
