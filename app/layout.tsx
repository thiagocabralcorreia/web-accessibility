import "../styles/globals.css";
import Provider from "./Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Provider>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
