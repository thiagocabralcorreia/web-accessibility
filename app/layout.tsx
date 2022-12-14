import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body>
        <div></div>
        <div>{children}</div>
      </body>
    </html>
  );
}
