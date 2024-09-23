import localFont from "next/font/local";
import "./globals.css";
import { SnackProvider } from "@/contexts/snackContext";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "snacks-client",
  description: "client (frontend) for snacks server (backend)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* Navigation Bar */}
        <header className="bg-gray-700 shadow-md py-4">
          <div className="container mx-auto flex justify-between items-center">
            {/* Navigation Links */}
            <nav className="flex space-x-8">
              <Link href="/" className="text-white font-bold text-md hover:underline">
                Home
              </Link>
              <Link href="/products" className="text-white font-bold text-md hover:underline">
                Products
              </Link>
              <Link href="/about" className="text-white font-bold text-md hover:underline">
                About Us
              </Link>
            </nav>
            {/* Cart Icon */}
            <div className="relative">
              <FaShoppingCart className="text-white w-6 h-6 cursor-pointer" />
              {/* Optional: Badge for number of items in the cart */}
              <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full">
                3
              </span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow p-6">
          <SnackProvider>{children}</SnackProvider>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 py-4">
          <div className="container mx-auto text-center">
            <p className="text-pink-600 font-bold text-md">Panoramix</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
