import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import Providers from "./Providers";
import ThemeSwitcher from "./ThemeSwitcher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
        <Providers>
          <Header />
          <div
            title="Change the theme"
            className="sm:hidden flex w-full justify-end pt-10 pr-10"
          >
            <ThemeSwitcher />
          </div>
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
