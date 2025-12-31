"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans m-5 px-0 py-0">
      <div className="max-w-6xl mx-auto pt-12 pb-16 px-1 sm:px-4">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-[48px] font-bold leading-12 tracking-tight text-[#333] mb-6 header-responsive wrap-break-word">
              QOREM IPSUM DOLOR
              <br />SIT AMET, CONSE
            </h1>
          </div>
          <div className="flex flex-col items-start">
            <p className="text-base text-[#333] mb-6 max-w-xs header-desc-responsive">
              Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a,
            </p>
            <button className="bg-[#333] text-white rounded-full px-7 py-3 font-bold text-base shadow hover:bg-[#222] transition learn-more-btn-responsive">
              LEARN MORE
            </button>
          </div>
        </div>
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8 md:gap-8 custom-gap-mobile">
            {/* Card 1 */}
            <div className="bg-[#d9d9d9] h-120 rounded-lg shadow flex items-end min-w-0">
              <div className="bg-white rounded-lg shadow pl-2.5 pr-2.5 pb-2.5 pt-3 sm:pt-6 m-2.5 w-full h-45 flex flex-col min-w-0">
                <h2 className="text-base font-bold mb-2 text-[#333] wrap-break-word">LOREM IPSUM</h2>
                <p className="text-sm text-[#333] leading-relaxed custom-ellipsis">
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
                <p className="text-sm text-[#333] leading-relaxed custom-ellipsis">
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim, &nbsp;
                  Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
                  turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                </p>
              </div>
            </div>
          </div>
          {/* Right Column (shifted down) */}
          <div className="flex flex-col gap-8 md:gap-8 mt-20 md:mt-20 custom-gap-mobile custom-gap-mobile-right">
            {/* Card 2 */}
            <div className="bg-[#d9d9d9] h-120 rounded-lg shadow flex items-end min-w-0">
              <div className="bg-white rounded-lg shadow pl-2.5 pr-2.5 pb-2.5 pt-3 sm:pt-6 m-2.5 w-full h-45 flex flex-col min-w-0">
                <h2 className="text-base font-bold mb-2 text-[#333] wrap-break-word">LOREM IPSUM</h2>
                <p className="text-sm text-[#333] leading-relaxed custom-ellipsis">
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
                <p className="text-sm text-[#333] leading-relaxed custom-ellipsis">
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
      <style jsx global>{`
        .custom-ellipsis {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          word-break: break-word;
        }
        .custom-ellipsis {
          -webkit-line-clamp: 4;
        }
        @media (max-width: 350px) {
          .custom-ellipsis {
            -webkit-line-clamp: 3;
          }
        }
        @media (max-width: 250px) {
          .custom-ellipsis {
            -webkit-line-clamp: 2;
          }
        }
        @media (max-width: 180px) {
          .custom-ellipsis {
            -webkit-line-clamp: 1;
          }
        }
        .bg-white, .bg-[#d9d9d9] {
          min-width: 0 !important;
          box-sizing: border-box;
        }
        /* Responsive header for very small screens */
        @media (max-width: 239px) {
          .header-responsive {
            font-size: 18px !important;
            line-height: 20px !important;
            word-break: break-word !important;
            padding: 0 !important;
            margin: 0 0 6px 0 !important;
          }
          .header-desc-responsive {
            font-size: 10px !important;
            line-height: 12px !important;
            word-break: break-word !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 223px) {
          .learn-more-btn-responsive {
            font-size: 7px !important;
            padding-left: 10px !important;
            padding-right: 10px !important;
            padding-top: 6px !important;
            padding-bottom: 6px !important;
            min-width: 0 !important;
            width: 70px !important;
            height: 28px !important;
            border-radius: 9999px !important;
            margin-top: 4px !important;
            white-space: normal !important;
            text-align: center !important;
          }
        }
        @media (max-width: 170px) {
          .header-responsive {
            font-size: 8px !important;
            line-height: 10px !important;
            margin: 0 0 2px 0 !important;
          }
          .header-desc-responsive {
            font-size: 5px !important;
            line-height: 7px !important;
            max-width: 100% !important;
          }
        }
        @media (max-width: 150px) {
          .header-responsive {
            font-size: 6px !important;
            line-height: 7px !important;
          }
          .header-desc-responsive {
            font-size: 4px !important;
            line-height: 5px !important;
          }
          .learn-more-btn-responsive {
            font-size: 5px !important;
            width: 50px !important;
            height: 18px !important;
            padding-left: 6px !important;
            padding-right: 6px !important;
            padding-top: 3px !important;
            padding-bottom: 3px !important;
          }
        }
        @media (max-width: 767px) {
          /* Set same vertical gap for all stacked cards */
          .custom-gap-mobile {
            gap: 24px !important;
          }
          /* Remove extra margin-top from right column when stacked */
          .custom-gap-mobile-right {
            margin-top: 0 !important;
          }
          /* Remove margin between 2nd and 3rd box (ensure both top and bottom are 0) */
          .custom-gap-mobile > :nth-child(2) {
            margin-bottom: -5px !important;
            margin-top: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
