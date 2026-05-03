import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AcceleratorHero } from "@/components/acclerator-hero";
import { Culture } from "@/components/culture";
import { Portfolio } from "@/components/portfolio";
import { CallToAction } from "@/components/call-to-action";

export const metadata: Metadata = {
  title: "Carbide Robotics \\ STEM Accelerator",
  description: "Empowering up-and-coming passionate thinkers through robotics competitions, STEM projects, and mentorship programs. Join our mission to foster innovation.",
  keywords: "robotics, STEM, competitions, mentorship, innovation, technology, education",
  authors: [{ name: "Carbide Robotics" }],
  robots: "index, follow",
  icons: {
    icon: "/carbide-robotics/icons/icon.png",
    apple: "/carbide-robotics/icons/apple-icon.png",  // 180x180px recommended
  },
  openGraph: {
    title: "Carbide Robotics | STEM Innovation & Competition",
    description: "Empowering the next generation of STEM innovators through robotics competitions and mentorship",
    type: "website",
    images: [
      {
        url: "../icons/icon.png",  // needs full basePath prefix
        width: 1200,  // recommended OG image size
        height: 630,
        alt: "Carbide Robotics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carbide Robotics | STEM Innovation & Competition",
    description: "Empowering the next generation of STEM innovators through robotics competitions and mentorship",
  },
};

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Accelerator Programme */}
      <div className="w-screen">
        <AcceleratorHero />


        {/* Culture Section */}
        <Culture />

        <Portfolio />

        {/* CTA Section */}
        <CallToAction />

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}