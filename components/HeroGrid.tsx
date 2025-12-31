import React from "react";

const cardData = [
  {},
  {},
  {},
  {},
];

export default function HeroGrid() {
  return (
    <div className="bg-[#f5f5f5] min-h-screen px-8 py-12">
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-12">
        <div>
          <h1 className="text-[48px] font-bold leading-12 tracking-tight text-[#333] mb-2">
            QOREM IPSUM DOLOR<br />SIT AMET, CONSE
          </h1>
        </div>
        <div className="flex flex-col items-start mt-6 md:mt-0 md:ml-8">
          <p className="text-sm text-[#333] mb-4 max-w-xs">
            Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
            molestie, dictum est a,
          </p>
          <button className="bg-[#333] text-white rounded-full px-6 py-2 font-semibold text-sm shadow hover:bg-[#222] transition">
            LEARN MORE
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <div className="bg-[#d9d9d9] h-65 rounded-lg shadow flex items-end">
            <div className="bg-white rounded-lg shadow p-5 m-5 w-[90%]">
              <h2 className="text-base font-medium mb-2 text-[#333]">LOREM IPSUM</h2>
              <p className="text-sm text-[#333] leading-relaxed">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              </p>
            </div>
          </div>
          <div className="bg-[#d9d9d9] h-65 rounded-lg shadow flex items-end">
            <div className="bg-white rounded-lg shadow p-5 m-5 w-[90%]">
              <h2 className="text-base font-medium mb-2 text-[#333]">LOREM IPSUM</h2>
              <p className="text-sm text-[#333] leading-relaxed">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="bg-[#d9d9d9] h-65 rounded-lg shadow flex items-end">
            <div className="bg-white rounded-lg shadow p-5 m-5 w-[90%]">
              <h2 className="text-base font-medium mb-2 text-[#333]">LOREM IPSUM</h2>
              <p className="text-sm text-[#333] leading-relaxed">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              </p>
            </div>
          </div>
          <div className="bg-[#d9d9d9] h-65 rounded-lg shadow flex items-end">
            <div className="bg-white rounded-lg shadow p-5 m-5 w-[90%]">
              <h2 className="text-base font-medium mb-2 text-[#333]">LOREM IPSUM</h2>
              <p className="text-sm text-[#333] leading-relaxed">
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}