import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Urbanist } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist', // Optional: for Tailwind integration
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Carbide Robotics",
    template: "%s \\ Carbide Robotics", 
  },
  description: "A student-led R&D organisation, a community of passionate innovators and a mentorship platform to nurture talents.",

  keywords: "robotics, STEM, competitions, mentorship, innovation, technology, education",
  authors: [{ name: "Carbide Robotics" }, { name: "vensah" }, { name: "vensah-dev" }, { name: "Ng Yu Fei" }, { name: "Venkatesh Devendran" }],
  robots: "index, follow",
  metadataBase: new URL("https://carbiderobotics.com"),

  icons: {
    icon: [
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/icons/icon-svg.svg", type: "image/svg+xml" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  
  openGraph: {
    title: "Carbide Robotics",
    description: "A student-led R&D organisation, a community of passionate innovators and a mentorship platform to nurture talents.",
    type: "website",
    images: [
      {
        url: "https://carbiderobotics.com/icons/og-image.png",  // needs full basePath prefix
        width: 1200,  // recommended OG image size
        height: 630,
        alt: "Carbide Robotics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbide Robotics | STEM Innovation & Competition",
    description: "A student-led R&D organisation, a community of passionate innovators and a mentorship platform to nurture talents.",
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) { 
  return (
    <html lang="en" className={`${urbanist.variable} ${geistMono.variable} h-full antialiased bg-background-primary`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}