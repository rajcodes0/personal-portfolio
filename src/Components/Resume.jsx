import { BsFileEarmarkText } from "react-icons/bs";
import { IoCloudDownload } from "react-icons/io5";


export default function Resume() {
  return (
    <section className="w-full">
      <h2 className="text-xl font-bold uppercase tracking-wider text-center mb-4">
        Resume
      </h2>

      <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition-all duration-200">
        <div className="flex flex-col items-center gap-4">
          <BsFileEarmarkText size={40} className="text-gray-400" />

          <div className="text-center">
            <h3 className="text-sm font-semibold mb-1">Raj Kumar - Resume</h3>
            <p className="text-xs text-gray-500">Full Stack Developer</p>
          </div>

          <a
            href="/Resume_full.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-sm hover:bg-gray-900 hover:border-gray-600 transition-all duration-200"
          >
            <IoCloudDownload size={14} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
