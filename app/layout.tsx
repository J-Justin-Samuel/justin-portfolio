import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Samuel — Electronics Engineer & AI Builder",
  description:
    "Justin Samuel is an Electronics Engineering student, AI Builder, and Full Stack Developer crafting meaningful digital experiences. Available for opportunities.",
  keywords: [
    "Justin Samuel",
    "Electronics Engineering",
    "AI Builder",
    "Full Stack Developer",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Justin Samuel" }],
  openGraph: {
    title: "Justin Samuel — Electronics Engineer & AI Builder",
    description:
      "Electronics Engineering student, AI Builder, and Full Stack Developer crafting meaningful digital experiences.",
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
