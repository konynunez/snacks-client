import localFont from "next/font/local";
import "./globals.css";
import { SnackProvider } from "@/contexts/snackContext";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SnackProvider>{children}</SnackProvider>
      </body>
    </html>
  );
}
