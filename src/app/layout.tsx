import SelectTrip from "@/components/SelectTrip/SelectTrip";
import Header from "@/widgets/Header";
import Navbar from "@/widgets/Navbar";
import { configure } from "mobx";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/widgets/Footer";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

// export const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Trabook",
  description: "Travel Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-bg1 min-h-[100dvh]`}>
        <header className="mx-auto pt-nav px-page">
          <Navbar />
          <Header />
          <SelectTrip className="mx-auto mt-12 mb-[7.5rem]" />
        </header>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
