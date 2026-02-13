import { BsFileEarmarkText } from "react-icons/bs";
import { IoCloudDownload } from "react-icons/io5";
import ResumePage from "../assets/Resume_full.pdf";

export default function Resume() {
  return (
    <section className="w-full">
      <h2 className="group relative text-xl font-bold uppercase tracking-wider text-center mb-4">
        Resume
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-in-out"></span>
      </h2>

      <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-200">
        <div className="flex flex-col items-center gap-4">
          <BsFileEarmarkText size={40}  />

          <div className="text-center">
            <h3 className="text-sm font-semibold mb-1">Raj Kumar - Resume</h3>
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          </div>

          <a
            href={ResumePage}
            download
            className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-white hover:text-black hover:border-gray-600 transition-all duration-200"
          >
            <IoCloudDownload
              size={14}
              className="animate-bounce hover:bg-white hover:text-black "
            />
            Download Resume
          </a>
          <a href="https://www.merriam-webster.com/dictionary/hire">Unlock full potential"</a>
        </div>
      </div>
    </section>
  );
}
