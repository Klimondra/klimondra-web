import "./globals.css";
import NavHeader from "@/components/navigation/NavHeader";
import Footer from "@/components/navigation/Footer";

export const metadata = {
  title: "Klimondra",
  description: "Ano, už to dělám po čtvrtý",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
