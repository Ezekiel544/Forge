import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Features } from "./components/Features";
import { Vision } from "./components/Vision";
import { Leadership } from "./components/Leadership";
import { CTA } from "./components/CTA";
import { Stats } from "./components/Stats";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Hero />
      <Stats />
      <About />
      <Features />
      <Vision />
      <Leadership />
      <CTA />
    </div>
  );
}
