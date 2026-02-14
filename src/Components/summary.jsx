import React from 'react'

function Summary() {
  return (
    <section className='w-full'>
         <div className="bg-[#111111] border border-gray-800 rounded-xl p-4 hover:border-gray-600 transition-all duration-200">
         <h2 className="group relative text-xl font-bold uppercase tracking-wider text-center mb-4">
        Summary
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300 ease-in-out"></span>
      </h2>
        <p className="text-sm text-gray-400 leading-relaxed">
          Computer Applications student with hands-on experience in full-stack web development 
          and building responsive applications. Proficient in JavaScript, React.js, Node.js, 
          and MongoDB with a focus on creating user-centric interfaces. Passionate about 
          learning new technologies and solving real-world problems through clean, maintainable code.
        </p>
      </div>
    </section>
  )
}

export default Summary
