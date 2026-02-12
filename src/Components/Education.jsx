import React from "react";

import { FaUniversity } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";

function Education() {
  const education = [
    {
      title: "Bachelor's in Computer Applications",
      subtitle: "Maharishi Dayanand University",
      date: "2023 - 2026",
      icon: FaUniversity ,
    },
    {
      title: "Senior Secondary",
      subtitle: "CBSE - 77.6%",
      date: "2021 - 2023",
      icon: FaSchool ,
    },
  ];
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 gap-3">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-[#111111] border border-gray-800 rounded-xl p-4 hover:border-gray-600 hover:scale-[1.02] transition-all duration-200"
          >
            <item.icon size={20} className="text-gray-400 mb-2" />
            <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
            <p className="text-xs text-gray-400 mb-1">{item.subtitle}</p>
            <p className="text-xs text-gray-500">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
