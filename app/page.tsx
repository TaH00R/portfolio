import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b0b0b] text-white min-h-screen">
        <Hero />
      </main>
    </>
  );
}