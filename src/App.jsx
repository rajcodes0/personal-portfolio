
import Intro from "./Components/Intro";
import Summary from "./Components/summary";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import  Resume from "./Components/Resume"
import Skills from "./Components/Skills"
import Footer from "./Components/Footer";



  function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-[420px] mx-auto px-4 py-6 flex flex-col gap-8">
        <Intro />
        <Summary />
        <Education />
        <Projects />
        <Resume />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}


export default App;