"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans m-5 px-0 py-0">
      <div className="max-w-6xl mx-auto pt-12 pb-16 px-1 sm:px-4">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1
              className={`
                  text-[48px] font-bold tracking-tight text-[#333] mb-6
                  wrap-break-word
                  leading-12
                  sm:text-[48px] sm:leading-12
                  max-[239px]:text-[18px] max-[239px]:leading-5 max-[239px]:mb-1.5 max-[239px]:p-0 max-[239px]:m-0
                  max-[170px]:text-[8px] max-[170px]:leading-2.5 max-[170px]:mb-0.5
                  max-[150px]:text-[6px] max-[150px]:leading-1.75
                `}
            >
              QOREM IPSUM DOLOR
              <br />SIT AMET, CONSE
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <p
              className={`
                text-base text-[#333] mb-6 max-w-xs
                wrap-break-word
                sm:text-base
                max-[239px]:text-[10px] max-[239px]:leading-3 max-[239px]:max-w-full
                max-[170px]:text-[5px] max-[170px]:leading-1.75 max-[170px]:max-w-full
                max-[150px]:text-[4px] max-[150px]:leading-1.25
              `}
            >
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a,
            </p>
              <button
              className={`
                bg-[#333] text-white rounded-full px-7 py-3 font-bold text-base shadow hover:bg-[#222] transition
                sm:text-base
                max-[223px]:text-[7px] max-[223px]:px-2.5 max-[223px]:py-1.5 max-[223px]:min-w-0 max-[223px]:w-17.5 max-[223px]:h-7 max-[223px]:rounded-full max-[223px]:mt-1 max-[223px]:whitespace-normal max-[223px]:text-center
                max-[150px]:text-[5px] max-[150px]:w-12.5 max-[150px]:h-4.5 max-[150px]:px-1.5 max-[150px]:py-0.75
              `}
            >
              LEARN MORE
            </button>
          </div>
        </div>
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div
            className={`
              flex flex-col gap-8 md:gap-8
              max-[767px]:gap-6
              custom-gap-mobile
            `}
          >
            {/* Card 1 */}
            <div className="bg-[#d9d9d9] h-120 rounded-lg shadow flex items-end min-w-0">
              <div className="bg-white rounded-lg shadow pl-2.5 pr-2.5 pb-2.5 pt-3 sm:pt-6 m-2.5 w-full h-45 flex flex-col min-w-0">
                <h2 className="text-base font-bold mb-2 text-[#333] wrap-break-word">LOREM IPSUM</h2>
                <p
                  className={`
                    text-sm text-[#333] leading-relaxed
                    wrap-break-word
                    overflow-hidden
                    line-clamp-4
                    max-[350px]:line-clamp-3
                    max-[250px]:line-clamp-2
                    max-[180px]:line-clamp-1
                    max-[150px]:line-clamp-1
                  `}
                >
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#d9d9d9] h-120 rounded-lg shadow flex items-end min-w-0">
              <div className="bg-white rounded-lg shadow pl-2.5 pr-2.5 pb-2.5 pt-3 sm:pt-6 m-2.5 w-full h-45 flex flex-col min-w-0">
                <h2 className="text-base font-bold mb-2 text-[#333] wrap-break-word">LOREM IPSUM</h2>
                <p
                  className={`
                    text-sm text-[#333] leading-relaxed
                    wrap-break-word
                    overflow-hidden
                    line-clamp-4
                    max-[350px]:line-clamp-3
                    max-[250px]:line-clamp-2
                    max-[180px]:line-clamp-1
                    max-[150px]:line-clamp-1
                  `}
                >
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                </p>
              </div>
            </div>
          </div>
          {/* Right Column (shifted down) */}
          <div
            className={`
              flex flex-col gap-8 md:gap-8 mt-20 md:mt-20
              max-[767px]:mt-0
              min-[767px]:mt-0
              custom-gap-mobile custom-gap-mobile-right
            `}
          >
            {/* Card 2 */}
            <div className="bg-[#d9d9d9] h-120 rounded-lg shadow flex items-end min-w-0">
              <div className="bg-white rounded-lg shadow pl-2.5 pr-2.5 pb-2.5 pt-3 sm:pt-6 m-2.5 w-full h-45 flex flex-col min-w-0">
                <h2 className="text-base font-bold mb-2 text-[#333] wrap-break-word">LOREM IPSUM</h2>
                <p
                  className={`
                    text-sm text-[#333] leading-relaxed
                    wrap-break-word
                    overflow-hidden
                    line-clamp-4
                    max-[350px]:line-clamp-3
                    max-[250px]:line-clamp-2
                    max-[180px]:line-clamp-1
                    max-[150px]:line-clamp-1
                  `}
                >
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bg-[#d9d9d9] h-120 rounded-lg shadow flex items-end min-w-0">
              <div className="bg-white rounded-lg shadow pl-2.5 pr-2.5 pb-2.5 pt-3 sm:pt-6 m-2.5 w-full h-45 flex flex-col min-w-0">
                <h2 className="text-base font-bold mb-2 text-[#333] wrap-break-word">LOREM IPSUM</h2>
                <p
                  className={`
                    text-sm text-[#333] leading-relaxed
                    wrap-break-word
                    overflow-hidden
                    line-clamp-4
                    max-[350px]:line-clamp-3
                    max-[250px]:line-clamp-2
                    max-[180px]:line-clamp-1
                    max-[150px]:line-clamp-1
                  `}
                >
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
