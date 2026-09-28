import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  Experience,
  Projects,
  TechStack,
  Recognition,
  Contact,
} from "./components";
import WhatIThink from "./pages/WhatIThink";

const Home = () => (
  <main>
    <Hero />
    <Experience />
    <Projects />
    <TechStack />
    <Recognition />
    <Contact />
  </main>
);

const App = () => {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;

  return (
    <BrowserRouter basename={basename}>
      <div className="relative min-h-screen bg-paper text-ink">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-i-think-about-ai-stack" element={<WhatIThink />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
