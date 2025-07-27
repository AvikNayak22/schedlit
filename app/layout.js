import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Schedlit",
  description: "Share availability. Get booked. Done.",
};

const raleway = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${raleway.className}`}>
          {/* Header */}
          <Header />

          <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-green-100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>
                Built with <span aria-hidden="true"> 💙</span> by{" "}
                <a
                  href="https://github.com/AvikNayak22"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avik Nayak
                </a>
              </p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
