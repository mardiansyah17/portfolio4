import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

const poppins = Poppins({ weight: ["300", "400", "500", "600", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mardiansyah.tech"),

  title: {
    template: "%s | Mardiancode",
    default: "Home | Mardiancode",
  },

  description:
    "Portfolio Muhammad Mardiansyah, Software Engineer yang berfokus pada pengembangan aplikasi web dan mobile.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#041F31] text-orange-100 pb-10`}>{children}</body>
    </html>
  );
}
