import Authprovider from "@/components/Authprovider/Authprovider";
import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { FooterLinks } from "@/components/FooterLinks";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import Popup from "@/components/Popup";
// import Head from "next/head";
// import Popup from "@/components/Ppoup";

export async function generateMetadata() {
  return {
    title: "Your Guide to the Best Boarding Schools in Moments | Sclore",
    description:
      "Find your dream boarding school quickly with Sclore. Unlock endless educational opportunities and start your journey to the perfect education today.",
    icons: [{ rel: "icon", url: "/sclorelogo.png" }],
    other: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
      },
      {
        name: "description",
        content:
          "Find your dream boarding school quickly with Sclore. Unlock endless educational opportunities and start your journey to the perfect education today.",
      },
      {
        name: "keywords",
        content:
          "School Admissions, School consultancy, School consultancy, Online School Listings, Admissions Guidance, Boarding School Listings, Trusted School Consultancy, School Admission Information, Finding the Right Boarding School",
      },
      {
        name: "application-name",
        content: "Sclore",
      },
    ],
    openGraph: {
      locale: "en_US",
      type: "website",
      title: "Your Guide to the Best Boarding Schools in Moments | Sclore",
      description:
        "Find your dream boarding school quickly with Sclore. Unlock endless educational opportunities and start your journey to the perfect education today.",
      url: "https://www.sclore.com/",
      site_name: "Sclore",
      images: [
        {
          url: "https://sclore.com/categorysclore.svg",
          alt: "Sclore Logo",
        },
      ],
    },
  };
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head></Head> */}
      <body className="overflow-x-hidden">
        <ToastContainer />
        <Authprovider>
          <Navbar />
          <Popup/>
          {children}
          <Footer />
          <FooterLinks />
        </Authprovider>
        <div className="fixed bottom-4 left-4 z-50">
          <Link href="tel:+9557695360" aria-label="Phone">
            <button className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600">
              <FaPhoneAlt className="text-2xl " />
            </button>
          </Link>
        </div>
        <div className="fixed bottom-4 right-4 z-50">
          <Link href="https://wa.me/9557695360" aria-label="WhatsApp">
            <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600">
              <FaWhatsapp className="md:text-[33px] text-3xl md:text-2xl" />
            </button>
          </Link>
        </div>
      </body>
    </html>
  );
}
