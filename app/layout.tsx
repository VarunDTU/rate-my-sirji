import PrelineScript from "@/components/PrelineScript";
import Navbar from "@/components/navbar";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Rate my Sirji",
  description: "Rate your sirji and see how they rank among other sirjis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <Navbar></Navbar>
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
      <PrelineScript />
    </html>
  );
}
