import "./globals.css";

import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Login Vertical Slice",
  description: "Login system practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
