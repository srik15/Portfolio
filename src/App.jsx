import { BrowserRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Recognition,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Recognition />
          <Contact />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
