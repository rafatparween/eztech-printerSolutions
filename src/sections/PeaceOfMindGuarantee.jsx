import React from 'react';
import ShieldIcon from '@mui/icons-material/Shield';

const PeaceOfMindGuarantee = () => {
  return (
    <main className="bg-teal-50 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row items-center shadow-xl">
        <img
          src="https://images.pexels.com/photos/4491443/pexels-photo-4491443.jpeg"
          alt="Peace of Mind"
          className="rounded-lg shadow-xl mb-6 md:mb-0 md:mr-8 w-full md:w-1/2 h-[85vh] object-cover"
        />
        <section className="text-left text-gray-700 w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#0f766e] border-b-2 border-[#0f766e] ">
            Peace of Mind Guarantee
          </h2>
          <p className="text-lg mb-4">
            At  Micro Sonic Repair , we ensure you feel confident and secure
            in your purchase. Our Peace of Mind Guarantee covers comprehensive
            testing, warranty coverage, and satisfaction guaranteed.
          </p>
          <div className="flex items-center mb-4">
            <ShieldIcon style={{ color: '#0f766e' }} fontSize="large" />
            <h3 className="text-xl font-bold text-[#0f766e] ml-2">
              Comprehensive Testing
            </h3>
          </div>
          <p className="text-lg mb-4">
            Each printer undergoes rigorous testing and quality checks to ensure
            top performance and reliability.
          </p>
          <div className="flex items-center mb-4">
            <ShieldIcon style={{ color: '#0f766e' }} fontSize="large" />
            <h3 className="text-xl font-bold text-[#0f766e] ml-2">
              Warranty Coverage
            </h3>
          </div>
          <p className="text-lg mb-4">
            We offer a robust warranty. Our support team is here to help with
            any issues you may encounter.
          </p>
          <div className="flex items-center mb-4">
            <ShieldIcon style={{ color: '#0f766e' }} fontSize="large" />
            <h3 className="text-xl font-bold text-[#0f766e] ml-2">
              Satisfaction Guaranteed
            </h3>
          </div>
          <p className="text-lg mb-4">
            Your satisfaction is our priority. Enjoy hassle-free returns and
            exchanges if you're not completely satisfied.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PeaceOfMindGuarantee;


// import React, { useState, useEffect } from 'react';
// import { Shield, CheckCircle, Security, Support, AutoAwesome } from '@mui/icons-material';

// const PeaceOfMindGuarantee = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 100);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <main className="bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-16 px-4 min-h-screen">
//       <div className="bg-white p-8 rounded-2xl w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center shadow-2xl transform transition-all duration-700 hover:shadow-xl">
//         {/* Image Section */}
//         <div className="relative mb-8 lg:mb-0 lg:mr-10 w-full lg:w-2/5 overflow-hidden rounded-xl">
//           <img
//             src="https://images.pexels.com/photos/4491443/pexels-photo-4491443.jpeg"
//             alt="Professional technician providing quality service"
//             className="w-full h-[500px] object-cover transform transition-transform duration-700 hover:scale-105"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
//           {/* Badge overlay */}
//           <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-md flex items-center">
//             <AutoAwesome sx={{ color: '#0d9488', fontSize: 20 }} />
//             <span className="ml-2 text-sm font-medium text-teal-700">Certified Experts</span>
//           </div>
//         </div>

//         {/* Content Section */}
//         <section className="text-left text-gray-700 w-full lg:w-3/5">
//           <div className="flex items-center justify-center lg:justify-start mb-2">
//             <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mr-3">
//               <Shield sx={{ color: '#0d9488', fontSize: 28 }} />
//             </div>
//             <h2 className="text-4xl font-bold text-teal-700 relative pb-3">
//               Peace of Mind Guarantee
//               <span className="absolute bottom-0 left-0 w-24 h-1 bg-teal-500 rounded-full"></span>
//             </h2>
//           </div>
          
//           <p className="text-lg mb-8 leading-relaxed text-gray-600 text-center lg:text-left mt-4">
//             At Micro Sonic Repair, we ensure you feel confident and secure in your 
//             purchase. Our Peace of Mind Guarantee covers comprehensive testing, 
//             warranty coverage, and satisfaction guaranteed.
//           </p>

//           {/* Feature 1 */}
//           <div className={`mb-8 transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//             <div className="flex items-start">
//               <div className="bg-teal-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
//                 <CheckCircle sx={{ color: '#0d9488', fontSize: 24 }} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-teal-800">
//                   Comprehensive Testing
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   Each printer undergoes rigorous testing and quality checks to ensure
//                   top performance and reliability. We test over 50 different parameters.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Feature 2 */}
//           <div className={`mb-8 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//             <div className="flex items-start">
//               <div className="bg-teal-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
//                 <Security sx={{ color: '#0d9488', fontSize: 24 }} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-teal-800">
//                   Extended Warranty Coverage
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   We offer a robust 2-year warranty on all repairs. Our dedicated support team 
//                   is available 7 days a week to help with any issues.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Feature 3 */}
//           <div className={`mb-6 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
//             <div className="flex items-start">
//               <div className="bg-teal-100 p-3 rounded-full mr-4 flex-shrink-0 mt-1">
//                 <Support sx={{ color: '#0d9488', fontSize: 24 }} />
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold text-teal-800">
//                   Satisfaction Guaranteed
//                 </h3>
//                 <p className="text-gray-600 mt-2">
//                   Your satisfaction is our priority. Enjoy hassle-free returns and
//                   exchanges within 30 days if you're not completely satisfied.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-3 gap-4 mt-8 mb-6">
//             <div className="text-center p-4 bg-teal-50 rounded-lg">
//               <div className="text-2xl font-bold text-teal-700">98%</div>
//               <div className="text-sm text-gray-600 mt-1">Satisfaction Rate</div>
//             </div>
//             <div className="text-center p-4 bg-teal-50 rounded-lg">
//               <div className="text-2xl font-bold text-teal-700">2,500+</div>
//               <div className="text-sm text-gray-600 mt-1">Printers Repaired</div>
//             </div>
//             <div className="text-center p-4 bg-teal-50 rounded-lg">
//               <div className="text-2xl font-bold text-teal-700">24h</div>
//               <div className="text-sm text-gray-600 mt-1">Support Response</div>
//             </div>
//           </div>

//           {/* Call to Action */}
//           <div className="flex flex-col sm:flex-row gap-4 mt-8">
//             <button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg flex items-center justify-center">
//               <Shield sx={{ mr: 1 }} />
//               Learn More About Our Guarantee
//             </button>
//             <button className="flex-1 border border-teal-600 text-teal-700 hover:bg-teal-50 font-medium py-3 px-6 rounded-lg transition-all duration-300">
//               Contact Our Support Team
//             </button>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default PeaceOfMindGuarantee;