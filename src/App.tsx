import { Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import NoteWorthyProjects from "./pages/NoteWorthyProjects";
import Projects from "./pages/Projects";
import Worked from "./pages/Worked";
import Archieve from "./components/Archieve";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-[#0a182d] antialiased fira-code-light container md:px-10 min-h-screen w-full text-[#64ffda]">
      <div className="md:w-[85%] mx-auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Worked />
                <Projects />
                <NoteWorthyProjects />
                <Contact />
              </>
            }
          />

          <Route path="/archieve" element={<Archieve />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
