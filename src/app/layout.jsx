import "./globals.css";
import AntigravityBuddy from "../components/AntigravityBuddy";

export const metadata = {
  title: "Kartikey Srivastava - Developer",
  description: "Portfolio of Kartikey Srivastava, specializing in AI, Data Science, and Web Development.",
  icons: {
    icon: "/assets/images/hero.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <AntigravityBuddy />
      </body>
    </html>
  );
}
