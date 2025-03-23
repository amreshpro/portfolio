import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SEOHead from "@/components/head/SEOHead";





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
      <SEOHead/>
      <body className={` p-5`} >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
