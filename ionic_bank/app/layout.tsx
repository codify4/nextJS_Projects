import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IONIC Bank",
  description: "High Tech, High Safety",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='flex items-center justify-center bg-[#D3D3D3] text-black'>{children}</body>
    </html>
  );
}
