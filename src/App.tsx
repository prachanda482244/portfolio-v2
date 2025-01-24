import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Worked from "./pages/Worked";

const App = () => {
  return (
    <div className="bg-[#0a182d] antialiased fira-code-light container px-10 min-h-screen w-full text-[#64ffda]">
      <div className="w-[90%] mx-auto ">
        <Navbar />
        <Hero />
        <About />
        <Worked />
        <Projects />
      </div>
    </div>
  );
};

export default App;
