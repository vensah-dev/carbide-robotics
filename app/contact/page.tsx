import { Footer } from "@/components/footer";
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar />

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            Have questions about our programs or want to get involved? Reach out to us!
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">📍</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">Singapore</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">✉️</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@carbiderobotics.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">📱</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+65 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="text-2xl mt-1">🌐</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Website</h3>
                  <p className="text-gray-600">www.carbiderobotics.org</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-stone-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-stone-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-600 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-stone-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-stone-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      
    </div>
  );
}