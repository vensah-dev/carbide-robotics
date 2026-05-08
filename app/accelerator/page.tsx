import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Culture } from "@/components/culture";
import { AcceleratorPictures }  from "@/components/accelerator-pictures";
import { CallToAction } from "@/components/call-to-action";
import { Hero } from "@/components/hero";



export const metadata: Metadata = {
  title: "Carbide Robotics \\ STEM Accelerator",
  description: "Our programme aims to nurture passionate thinkers through the creation of STEM projects with assistance from a broader web of mentor coaches and like-minded students with adjacent expertise.",
  keywords: "robotics, STEM, competitions, mentorship, innovation, technology, education",
  authors: [{ name: "Carbide Robotics" }, { name: "vensah" }, { name: "vensah-dev" }],
  robots: "index, follow",
  icons: {
    icon: "/carbide-robotics/icons/icon.png",
    apple: "/carbide-robotics/icons/apple-icon.png",  // 180x180px recommended
  },
  openGraph: {
    title: "Carbide Robotics \\ STEM Accelerator",
    description: "Our programme aims to nurture passionate thinkers through the creation of STEM projects with assistance from a broader web of mentor coaches and like-minded students with adjacent expertise.",
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
    title: "Carbide Robotics \\ STEM Accelerator",
    description: "Our programme aims to nurture passionate thinkers through the creation of STEM projects with assistance from a broader web of mentor coaches and like-minded students with adjacent expertise.",
  },
};

export default function AcceleratorPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Accelerator Programme */}
      <div className="w-screen">
        <Hero 
          title={<>STEM Accelerator Programme</>}
          tagline={<>Our programme aims to nurture passionate thinkers through the creation of STEM projects with assistance from a broader web of mentor coaches and like-minded students with adjacent expertise.</>}
        />


        {/* Culture Section */}
        <Culture />

        {/* <Portfolio /> */}
        {/* <Portfolio /> */}

        <AcceleratorPictures />

        {/* CTA Section */}
        <CallToAction />

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}