import type { Metadata } from "next";
import { Epilogue, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/header";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-epilogue",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "B S Enviro",
  description:
    "Designing and Installing Sewage Treatment, UF/UV/RO & Water Supply Systems Tailored for Industrial, Residential & Municipal Needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} ${montserrat.variable}`}>
        <div className="block md:flex">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
