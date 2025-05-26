import "./globals.css";

export const metadata = {
  title: "Klimondra",
  description: "Ano, už to dělám po čtvrtý",
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
