import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rani Sharma | Full Stack Developer",
  description: "Portfolio of Rani Sharma, a Full Stack Developer specializing in Next.js, Node.js, and secure backend systems.",
  icons: {
    icon: "/favicon.ico", // This looks for the icon in your public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
