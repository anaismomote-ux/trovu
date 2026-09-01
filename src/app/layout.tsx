import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Trovu — Find your person.",
  description: "The trust-first marketplace for personal services. AI-matched, escrow-protected, DBS-verified. Book a provider in minutes.",
  keywords: ["beauty", "fitness", "personal training", "hair", "services", "UK", "Manchester"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-app text-[var(--text)] antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "var(--white)",
              border: "1.5px solid var(--border)",
              color: "var(--text)",
              fontFamily: "var(--font-sans)",
              borderRadius: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
