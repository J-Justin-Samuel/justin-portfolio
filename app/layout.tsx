import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Samuel — Full Stack Developer & AI Builder",
  description:
    "Justin Samuel is a Full Stack Developer and AI Builder crafting meaningful digital experiences. Available for opportunities.",
  keywords: [
    "Justin Samuel",
    "AI Builder",
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Justin Samuel" }],
  openGraph: {
    title: "Justin Samuel — Full Stack Developer & AI Builder",
    description:
      "Full Stack Developer and AI Builder crafting meaningful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
