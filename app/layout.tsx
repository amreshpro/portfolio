import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";





export const metadata: Metadata = {
  title: "Amresh Maurya",
  description: "Amresh Maurya Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <body className={` p-5`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
