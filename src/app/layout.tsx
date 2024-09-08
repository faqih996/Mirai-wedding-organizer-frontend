import type { Metadata } from "next";
import "@/assets/css/index.css";


export const metadata: Metadata = {
  title: "Wedding Organizer",
  description: "Get Your Wedding Done",
};

export default function RootLayout({
  children, modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}

        {modal}
      </body>
    </html>
  );
}
