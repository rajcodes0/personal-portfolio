import Nodejs from "../assets/node.svg";
import Git from "../assets/git.svg";
import Cpp from "../assets/cpp.svg";
import MongoDB from "../assets/mongo.svg";
import Linux from "../assets/linux.svg";
import Postgres from "../assets/postgres.svg";
import Js from "../assets/js.svg";
import Express from "../assets/express.svg";
import ReactLogo from "../assets/react.svg";
import Html from "../assets/html.svg";
import Css from "../assets/css.svg";
import Tailwind from "../assets/tailwind.svg";


function Skills() {
  const circularSkills = [
    { name: "React", svg: <img src={ReactLogo} alt="React" className="w-7 h-7" /> },
    { name: "Node.js", svg: <img src={Nodejs} alt="Node" className="w-7 h-7" /> },
    { name: "JavaScript", svg: <img src={Js} alt="JS" className="w-7 h-7" /> },
    { name: "MongoDB", svg: <img src={MongoDB} alt="MongoDB" className="w-7 h-7" /> },
    { name: "Postgres", svg: <img src={Postgres} alt="Postgres" className="w-7 h-7" /> },
    { name: "C++", svg: <img src={Cpp} alt="C++" className="w-7 h-7" /> },
    { name: "Linux", svg: <img src={Linux} alt="Linux" className="w-7 h-7" /> },
  ];

  const pillSkills = [
    { name: "HTML5", svg: <img src={Html} alt="HTML" className="w-4 h-4" /> },
    { name: "CSS3", svg: <img src={Css} alt="CSS" className="w-4 h-4" /> },
    { name: "Express", svg: <img src={Express} alt="Express" className="w-4 h-4" /> },
    { name: "Tailwind", svg: <img src={Tailwind} alt="Tailwind" className="w-4 h-4" /> },
    { name: "Git", svg: <img src={Git} alt="Git" className="w-4 h-4" /> },
    { name: "REST APIs" },
    { name: "Responsive Design" },
  ];

  return (
    <section className="w-full">
       <h2 className="group relative text-xl font-bold uppercase tracking-wider text-center mb-4">
        Skills
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-in-out"></span>
      </h2>

      <div className="bg-[#111111] border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-200">

        {/* Circular Skills */}
        <div className="flex justify-center gap-3 mb-4 flex-wrap">
          {circularSkills.map((skill, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:border-gray-500 hover:scale-110 transition-all duration-200 cursor-default"
              title={skill.name}
            >
              {skill.svg}
            </div>
          ))}
        </div>

        {/* Pill Skills */}
        <div className="flex justify-center gap-2 flex-wrap">
          {pillSkills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 border border-gray-700 rounded-full text-xs text-gray-300 hover:border-gray-500 hover:scale-105 transition-all duration-200 cursor-default flex items-center gap-1.5"
            >
              {skill.svg && skill.svg}
              {skill.name}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
