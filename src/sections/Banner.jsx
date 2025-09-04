
// "use client";
// import Image from 'next/image';
// import { useRouter } from 'next/navigation'; 

// export default function Banner() {
//   // const handleRedirect = () => {
//   //   window.open("https://www.printersmartassistant.com/", "_blank");
//   // };
//   const router = useRouter(); 

//   const handleSetupClick = () => {
//     router.push('../service/Pages'); // Ensure the path is correct
//   };

//   return (
//     <div className="flex flex-col items-center py-14 space-y-14 mt-[-33px] bg-[#007DBD] mt-[40px]">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 w-full max-w-7xl p-10 border border-gray-200 rounded-lg shadow-lg bg-white">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <Image
//             src="/printergirl.jpeg" // Replace with the actual path to your image
//             alt="Printer Setup"
//             width={800} // Increased width
//             height={500} // Increased height
//             className="rounded-lg object-cover"
//           />
//         </div>
//         {/* Text Section */}
//         <div className="w-full md:w-1/2 space-y-8">
//           <h2 className="text-4xl font-bold text-[#007DBD]">How to Set Up Your Printer</h2> {/* Further increased text size */}
//           <p className="text-xl leading-relaxed text-black">
//             Click Printer Setup for step-by-step guidance on how to set up, configure, and register your printer.
//           </p>
//           <button 
//             className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200"
//             onClick={handleSetupClick}
//           >
//             <p className='text-white'>
//               Printer Setup
//             </p>
//           </button>
//           <div className="text-lg">
//             <span className="font-semibold text-black">More support</span><br />
//             <a href="#" className="text-[#007DBD] underline hover:text-blue-200">
//               Get Instant Support
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function Banner() {
//   const navigate = useNavigate();

//   const handleSetupClick = () => {
//     navigate("../service/Pages"); // Ensure the path is correct
//   };

//   return (
//     <div className="flex flex-col items-center py-14 space-y-14 mt-[-33px] bg-[#007DBD] mt-[60px]">
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 w-full max-w-7xl p-10 border border-gray-200 rounded-lg shadow-lg bg-white">
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <img
//             src="/printergirl.jpeg" // Replace with actual path
//             alt="Printer Setup"
//             width={800} // Increased width
//             height={500} // Increased height
//             className="rounded-lg object-cover"
//           />
//         </div>
//         {/* Text Section */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <h2 className="text-5xl font-bold text-[#007DBD]">
//            Diagnose and solve
//           </h2>
//           <h2 className="text-4xl font-bold text-[#007DBD]">
//            Contact Support – Chat Live
//           </h2>
//           <p className="text-xl leading-relaxed text-black">
//             In this support hub, you'll find quick access to live assistance for common printer issues.
//           </p>
//           <button
//             className="bg-[#007DBD] text-white py-3 px-8 rounded text-lg font-medium hover:bg-blue-300 transition duration-200"
//             onClick={handleSetupClick}
//           >
//             <p className="text-white">Click Here For Chat Support</p>
//           </button>
//           <div className="text-lg">
//             <span className="font-semibold text-black">More support</span>
//             <br />
//             <a
//               href="#"
//               className="text-[#007DBD] underline hover:text-blue-200"
//             >
//               Get Instant Support
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  const [jivoReady, setJivoReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load JivoChat script dynamically
    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/kd9uAKn19v"; // apna widget code yaha
    script.async = true;

    script.onload = () => {
      const waitForJivo = setInterval(() => {
        if (typeof window !== "undefined" && window.jivo_api) {
          setJivoReady(true);
          clearInterval(waitForJivo);
        }
      }, 500);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSetupClick = () => {
    if (typeof window !== "undefined" && jivoReady && window.jivo_api) {
      window.jivo_api.open();
    } else {
      alert("Chat is still loading. Please wait a moment...");
    }
  };

  return (
    <div className="flex flex-col items-center py-10 sm:py-14 space-y-10 sm:space-y-14 bg-[#007DBD] px-4 sm:px-6 md:px-10 mt-[60px]">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10 lg:space-x-12 w-full max-w-7xl p-6 sm:p-10 border border-gray-200 rounded-lg shadow-lg bg-white">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/printergirl.jpeg"
            alt="Printer Setup"
            className="rounded-lg object-cover w-full max-w-xs sm:max-w-sm md:max-w-full h-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#007DBD]">
            Diagnose and solve
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007DBD]">
            Contact Support – Chat Live
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-black">
            In this support hub, you'll find quick access to live assistance for common printer issues.
          </p>
          <button
            className="bg-[#007DBD] text-white py-2 sm:py-3 px-6 sm:px-8 rounded text-base sm:text-lg font-medium hover:bg-blue-300 transition duration-200 w-full sm:w-auto"
            onClick={handleSetupClick}
            disabled={!jivoReady}
          >
            <p className="text-white">Click Here For Chat Support</p>
          </button>
          <div className="text-sm sm:text-base md:text-lg">
            <span className="font-semibold text-black">More support</span>
            <br />
            <a
              href="#"
              className="text-[#007DBD] underline hover:text-blue-200"
            >
              Get Instant Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

















