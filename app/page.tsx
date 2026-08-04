import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GithubActivity from "@/components/GithubActivity";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#0b0b0b] text-white min-h-screen">
        <Hero />

        <GithubActivity />

        <TechStack />

        <Projects />

        <Experience />

        <Footer />s
      </main>
    </>
  );
}