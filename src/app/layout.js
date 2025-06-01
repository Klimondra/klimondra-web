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
        {children}
      </body>
    </html>
  );
}
