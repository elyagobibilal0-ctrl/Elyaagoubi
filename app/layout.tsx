import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "AutoMasterPro.ma — Morocco Automotive Marketplace",
  description: "Find the best garage near you in Morocco. Book repairs, request roadside assistance, and connect with trusted automotive services.",
  keywords: [
    "garage maroc",
    "garage tanger",
    "mecanicien maroc",
    "depannage voiture",
    "réparation automobile",
    "automotive marketplace",
    "roadside assistance"
  ],
  metadataBase: new URL("https://automasterpro.ma"),
  openGraph: {
    title: "AutoMasterPro.ma — Morocco Automotive Marketplace",
    description: "Find the best garage near you in Morocco. Book repairs, request roadside assistance, and connect with trusted automotive services.",
    type: "website",
    url: "https://automasterpro.ma",
    images: [
      {
        url: "https://automasterpro.ma/og-image.png",
        width: 1200,
        height: 630,
        alt: "AutoMasterPro.ma"
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#030b18" />
      </head>
      <body className="bg-automaster-900 text-white antialiased selection:bg-slate-300 selection:text-slate-950">
        <Navbar />
        <div className="min-h-[calc(100vh-120px)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
