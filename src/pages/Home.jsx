import { Montserrat } from "next/font/google";
import Hero from "@/layout/Hero";
import Header from "@/layout/Header";
import Breadcrumbs from "@/layout/Breadcrumbs";
import Youtube from "@/layout/Youtube";
import DigitalPlatform from "@/layout/DigitalPlatform";
import FAQ from "@/layout/FAQ";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen h-full bg-purple ${montserrat.className}`}
    >
      <Header />
      <Hero />
      <Breadcrumbs />
      <Youtube />
      <DigitalPlatform />
      <FAQ />
    </main>
  );
}
