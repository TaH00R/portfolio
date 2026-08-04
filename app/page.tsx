import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GithubActivity from "@/components/GithubActivity";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b0b0b] text-white min-h-screen">
        <Hero />
        <GithubActivity />
      </main>
    </>
  );
}