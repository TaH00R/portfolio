import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0d0d0d] text-white">
        <Hero />
      </main>
    </>
  );
}