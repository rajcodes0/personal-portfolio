import { LuExternalLink } from "react-icons/lu";
import { MdOutlineArrowRightAlt } from "react-icons/md";


export default function Projects() {
  const projects = [
    {
      title: "Notes App",
      tech: "MERN Stack, React, Vite, Node.js, MongoDB",
      description:
        "Full-stack note-taking app with CRUD functionality and RESTful API",
      link: "#",
    },
    {
      title: "Developer Portfolio",
      tech: "React, Tailwind CSS",
      description:
        "Personal portfolio website with modern UI/UX and responsive design",
      link: "https://rajcodes0.netlify.app",
    },
    {
      title: "Resare",
      tech: "React, JavaScript, Tailwind CSS",
      description: "Modern React application with component-based architecture",
      link: "https://github.com/rajcodes0/Resare",
    },
  ];

  return (
    <section className="w-full">
       <h2 className="group relative text-xl font-bold uppercase tracking-wider text-center mb-4">
        Projects
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-in-out"></span>
      </h2>

      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111111] border border-gray-800 rounded-xl p-4 hover:border-gray-600 hover:-translate-y-1 transition-all duration-200 group"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-sm font-semibold group-hover:text-white transition-colors">
                {project.title}
              </h3>
              < LuExternalLink
                size={14}
                className="text-gray-500 group-hover:text-white transition-colors"
              />
            </div>
            <p className="text-xs text-gray-500 mb-2">{project.tech}</p>
            <p className="text-xs text-gray-400">{project.description}</p>
          </a>
        ))}
      </div>


      <a
        href="https://github.com/rajcodes0"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400 hover:text-white transition-colors group"
      >
        <span>github.com/rajcodes0</span>
        < MdOutlineArrowRightAlt
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </a>
    </section>
  );
}
