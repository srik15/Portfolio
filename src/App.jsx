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
  // #region agent log
  fetch("http://127.0.0.1:7645/ingest/d97f9674-765c-4c91-aa3b-bad9d2cde104", {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "4819ac" },
    body: JSON.stringify({
      sessionId: "4819ac",
      location: "App.jsx:render",
      message: "App component rendering",
      data: {},
      hypothesisId: "H2",
      timestamp: Date.now(),
      runId: "pre-fix",
    }),
  }).catch(() => {});
  // #endregion

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-paper text-ink">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
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
