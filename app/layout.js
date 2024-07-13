import Navigation from "./components/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <Navigation />
      <body>{children}</body>
    </html>
  );
}
