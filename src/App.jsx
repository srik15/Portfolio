import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  Experience,
  Projects,
  Skills,
  TechStack,
  Recognition,
  Contact,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <TechStack />
          <Recognition />
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
