import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>&copy; 2021 Wild Oasis &bull; All rights reserved</footer>
      </body>
    </html>
  );
}
