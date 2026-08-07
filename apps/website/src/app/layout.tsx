import type { Metadata } from "next";
import { Inter, Saira_Stencil } from "next/font/google";

import "./globals.css";
import Background from "@/components/layout/Background";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const sairaStencil = Saira_Stencil({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Kyndle",
  description: "XP That Matters IRL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sairaStencil.variable} h-full antialiased`}
    >
      <body className="min-h-screen text-white overflow-x-hidden">
         <Background />

        {children}
      </body>
    </html>
  );
}

