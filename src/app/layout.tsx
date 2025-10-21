import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: '%s | B S Enviro N Infracon Pvt Ltd',
    default: 'B S Enviro N Infracon Pvt Ltd',
  },
  description:
    "A Complete Water & Waste Water Solution",
  metadataBase: new URL('https://bsenviro.com/'),
  keywords: ['B S Enviro N Infracon Pvt Ltd', 'water treatment', 'waste water solution']
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
