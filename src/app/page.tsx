import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-6 py-8 sm:px-6 sm:py-6">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
