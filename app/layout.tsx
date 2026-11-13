import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Background from "@/components/Background";
import Effects from "@/components/Effects";
import Footer from "@/components/Footer";
import LogoSprite from "@/components/LogoSprite";
import Navbar from "@/components/Navbar";
import { site } from "@/data/site";
import "./globals.css";

const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Home - Alfianzyh's", template: "%s - Alfianzyh" },
  description: site.description,
  authors: [{ name: site.author }],
  openGraph: {
    type: "website",
    title: "Muhammad Alfiansyah — Portfolio",
    description: site.description,
    images: ["/img/opt/profile4.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5faff" },
    { media: "(prefers-color-scheme: dark)", color: "#07111f" },
  ],
};

// Runs before paint: enables scroll-reveal styles and restores the saved theme.
const bootScript = `document.documentElement.classList.add('js');try{var t=localStorage.getItem('theme-v2');if(t)document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <LogoSprite />
        <Background />
        <Effects />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
