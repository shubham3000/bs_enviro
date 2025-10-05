import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "B S Enviro N Infracon Pvt Ltd",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="block md:flex">{children}</div>
      </body>
    </html>
  );
}
