import { ContactHero } from "@/components/contact-hero";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Carbide Robotics \\ Contact",
  description: "Have questions or want to learn more about our programmes? Get in touch with us!",
  keywords: "robotics, STEM, competitions, mentorship, innovation, technology, education",
  authors: [{ name: "Carbide Robotics" }],
  robots: "index, follow",
  icons: {
    icon: "/carbide-robotics/icons/icon.png",
    apple: "/carbide-robotics/icons/apple-icon.png",  // 180x180px recommended
  },
  openGraph: {
    title: "Carbide Robotics \\ Contact",
    description: "Have questions or want to learn more about our programmes? Get in touch with us!",
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
    title: "Carbide Robotics \\ Contact",
    description: "Have questions or want to learn more about our programmes? Get in touch with us!",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Contact Section */}
      <div className="w-screen">
        <ContactHero />

      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}