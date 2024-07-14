import Counter from "./cabins/Counter";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

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
