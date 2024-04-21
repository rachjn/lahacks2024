import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Juncture",
  description: "Club discovery at UCLA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" font-rigsans">
        <link rel="stylesheet" href="https://use.typekit.net/saw3ipn.css" />
        {children}
        <footer className="py-5 border-t border-gray-900 bg-black overflow-hidden">
          <div className="inline-grid grid-flow-col gap-5 px-5">
            <Link href="https://github.com/rachjn/lahacks2024">
              <Image
                src="./github.svg"
                width={20}
                height={20}
                alt="github"
                className="hover:opacity-50"
              />
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
