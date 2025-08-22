// import React, { useState } from 'react';
// import CustomerReview from '../../sections/CustomerReview';
// import ComputerService from './ComputerService';
// import PrinterService from './PrinterService';
// import JivoChat from '../../JivoChat';

// const Services = () => {
//   const [activeService, setActiveService] = useState('computers');

//   return (
//     <>
//       <main>
//         <div className="relative bg-[#0f766e] py-12 mt-20">
//           <div
//             className="absolute inset-0 bg-cover bg-center opacity-50"
//             style={{
//               backgroundImage:
//                 "url('https://img.freepik.com/premium-photo/multi-function-printer-machine_127657-16535.jpg?w=900')",
//             }}
//           ></div>
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
//               Our 
//             </h1>
//             <p className="text-lg md:text-2xl animate__animated animate__fadeInUp">
//               Computer & Printers
//             </p>
//           </div>
//         </div>

//         {/* ----------------------------------------- */}
//         <div className="bg-white">
//           <div className="flex justify-center items-center gap-10 p-4">
//             <button
//               className={`px-9 py-2 shadow-2xl font-bold ${
//                 activeService === 'computers'
//                   ? 'border-b-2 border-[#0f766e] text-[#0f766e]'
//                   : 'text-gray-500'
//               }`}
//               onClick={() => setActiveService('computers')}
//             >
//               Computers
//             </button>
//             <button
//               className={`px-9 py-2 shadow-2xl font-bold ${
//                 activeService === 'printers'
//                   ? 'border-b-2 border-[#0f766e] text-[#0f766e]'
//                   : 'text-gray-500'
//               }`}
//               onClick={() => setActiveService('printers')}
//             >
//               Printers
//             </button>
//           </div>
//         </div>
//         {/* ----------------------------------------- */}

//         {activeService === 'computers' && <ComputerService />}
//         {activeService === 'printers' && <PrinterService />}

//         {/* --------------- SOON SERVICE -------------  */}

//         <section className="bg-gray-100 shadow-inner py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
//             <div className="flex-1 text-center lg:text-left ml-10">
//               <p className="text-3xl font-bold text-[#0f766e] mb-4">
//                 Support Available 24/7
//               </p>
//               <p className="text-lg text-gray-700">
//                 Get online support anytime, day or night. Connect with us online
//                 or by phone in minutes for immediate assistance!
//               </p>
//             </div>
//             <div className="flex-1">
//               <img
//                 className="w-full h-auto rounded-lg shadow-lg"
//                 src="https://img.freepik.com/free-photo/smiley-couple-home-sofa-with-laptop_23-2148560944.jpg?t=st=1717153174~exp=1717156774~hmac=8e66e53f64cc2a2be7a3119aaba39edd67357fbf5e899b17ebb597a93833cb2c&w=826"
//                 alt="Online support"
//               />
//             </div>
//           </div>
//         </section>
//       </main>
//       <CustomerReview />
//       <JivoChat/>
//     </>
//   );
// };

// export default Services;




import { useState, useEffect } from 'react';

const ServicePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Hero Section */}
      <div className="relative py-16 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90"></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Welcome to Micro Sonic Solutions
          </h1>
          <p 
            className={`text-xl max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            At Micro Sonic, we specialize in refurbished printers that meet the highest standards of quality and performance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Intro Section */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 text-center">
              Each device is carefully inspected, tested, and certified to ensure it works like new. Our goal is to deliver affordable, eco-friendly printing solutions without compromising on reliability.
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent my-10"></div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Who We Are</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700">
              We are an independent IT solutions and printer services provider committed to making technology simple and affordable. By offering certified refurbished printers and professional setup assistance, we help individuals and businesses save money while reducing e-waste.
            </p>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-8 bg-blue-50 rounded-lg my-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Mission</h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-gray-700">
              Our mission is to provide sustainable and cost-effective printing solutions for homes and businesses. By giving printers a second life through refurbishment, we reduce electronic waste and promote environmentally conscious practices — helping our customers and the planet at the same time.
            </p>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">What We Offer</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span><strong>High-Quality Refurbished Printers</strong> – Each printer undergoes rigorous testing and certification for dependable performance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span><strong>Affordable Solutions</strong> – Save significantly compared to buying new devices, without compromising quality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span><strong>Eco-Friendly Options</strong> – Reduce electronic waste by choosing refurbished products.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span><strong>Warranty Coverage</strong> – All refurbished printers include warranty protection for peace of mind.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span><strong>Customer Assistance</strong> – Our dedicated support team is available to help with setup and general product inquiries.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Warranty Section */}
        <section className="py-8 bg-blue-50 rounded-lg my-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Warranty Coverage</h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-gray-700 mb-6">
              We stand behind the quality of every refurbished printer we sell. Our goal is to provide customers with products that are not only cost-effective but also reliable and backed by confidence.
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>All refurbished printers come with a 6-month limited warranty covering defects in materials and workmanship under normal use.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>Warranty service includes replacement, repair (where applicable), or refund, at our discretion, if a product is found to be defective within the coverage period.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>Extended warranty options may be available with select purchases or service plans.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Return Policy */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Return Policy</h2>
          <div className="max-w-4xl mx-auto">
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>We offer a 7-day return policy for all refurbished printers purchased directly from us, provided the product is returned in its original condition.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>Refunds are processed within 7–10 business days after the returned product is inspected and approved.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>Customers are responsible for return shipping unless the printer arrives damaged, defective, or incorrect.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Customer Responsibilities */}
        <section className="py-8 bg-blue-50 rounded-lg my-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Customer Responsibilities</h2>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg text-gray-700 mb-6">
              To ensure eligibility for warranty or returns, customers should:
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>Retain proof of purchase (invoice or receipt).</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>Use the product under normal conditions as described in the warranty terms.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1 text-xl">•</span>
                <span>Contact our support team immediately if an issue arises, so we can resolve it quickly.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Commitment</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              We are more than just a printer supplier — we are your partners in providing affordable, eco-friendly printing solutions. Our commitment to quality, transparency, and sustainability drives everything we do. By choosing Micro Sonic, you not only receive reliable technology but also contribute to reducing e-waste and supporting a greener planet.
            </p>
            <p className="text-lg text-gray-700">
              Thank you for choosing Micro Sonic Solutions. We look forward to serving you with reliable products, clear policies, and complete peace of mind.
            </p>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-blue-900 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Printer?</h3>
        <button className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition-colors duration-300">
          Browse Our Products
        </button>
      </div>
    </div>
  );
};

export default ServicePage;