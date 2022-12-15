import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
