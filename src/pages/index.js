import Hero from "@/layout/Hero";
import Header from "@/layout/Header";
import { Inter } from "next/font/google";
import Breadcrumbs from "@/layout/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center w-screen h-full bg-purple ${inter.className}`}
    >
      <Header />
      <Hero />
      <Breadcrumbs />
    </main>
  );
}
