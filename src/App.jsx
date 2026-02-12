import React from "react";
import Intro from "./Components/Intro";
import Summary from "./Components/summary";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import  Resume from "./Components/Resume"
import Skills from "./Components/Skills"

function App() {
  return (
    <div>
      <Intro />
      <Summary />
      <Education />
      <Projects/>
      <Resume/>
      <Skills />
    </div>
  );
}

export default App;
