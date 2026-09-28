import type { Metadata } from "next";
import "./globals.css";
import "./usability.css";

export const metadata: Metadata = {
  title: "Sujan Subedi   |   Computer Teacher & Front-End Developer",
  description: "Portfolio of Sujan Subedi, a Computer Teacher and Front-End Developer from Pokhara, Nepal.",
  openGraph: {
    title: "Sujan Subedi  |   Computer Teacher & Front-End Developer",
    description: "Computer teacher and front-end developer from Pokhara, Nepal.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
