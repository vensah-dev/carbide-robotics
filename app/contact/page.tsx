import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";

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
    <div className="min-h-screen bg-[var(--background-primary)]">
      {/* Navigation */}
      <Navbar />

      {/* Footer */}
      <footer className="w-full py-12 px-8 border-t border-[var(--border-color)] bg-[var(--footer-bg)]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[var(--footer-font)]">
            © 2024 Carbide Robotics. Empowering STEM innovation through robotics competitions and mentorship.
          </p>
        </div>
      </footer>
    </div>
  );
}