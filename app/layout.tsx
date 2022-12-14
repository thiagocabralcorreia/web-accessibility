import Provider from "./Provider";
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
        <Provider>
          <ThemeSwitcher />
          {children}
        </Provider>
      </body>
    </html>
  );
}
