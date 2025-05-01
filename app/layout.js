import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vehicle",
  description: "Find Your Next Dream Car",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header></Header>
          <main className='min-h-screen'>
        {children}

          </main>
          <footer className="bg-blue-50 py-12 ">
            <div className="container mx-auto mt-12 px-4 text-center text-gray-600">
              <p>Made with ❤ By Oliver</p>
            </div>
          </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
