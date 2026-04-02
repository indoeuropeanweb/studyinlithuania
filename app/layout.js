import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],          
  weight: ["400", "500", "700"],
  variable: "--font-poppins",  
});

export const metadata = {
  title: "A Study Abroad Agency for Indian Students | Study in Lithuania",
  description: "A trusted study abroad agency for Indian students, offering expert guidance to pursue higher education in Lithuania. We assist with university selection, admissions, visa processing, and career support to ensure a smooth and successful journey abroad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
