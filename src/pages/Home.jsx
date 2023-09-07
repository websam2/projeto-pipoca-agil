import { Inter } from "next/font/google";
import Hero from "@/layout/Hero";
import Header from "@/layout/Header";
import Breadcrumbs from "@/layout/Breadcrumbs";
import Youtube from "@/layout/Youtube";
import DigitalPlatform from "@/layout/DigitalPlatform";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen h-full bg-purple ${inter.className}`}
    >
      <Header />
      <Hero />
      <Breadcrumbs />
      <Youtube />
      <DigitalPlatform />
    </main>
  );
}
