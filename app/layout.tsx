import { PageContainer } from "../styles/pages/layout";
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
        <PageContainer>{children}</PageContainer>
      </Provider>
    </html>
  );
}
