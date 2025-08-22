// import React from 'react';

// const content = [
//   {
//     id: 2,
//     title: 'Who We Are',
//     content:
//       'At Micro Sonic Repair , we specialize in selling refurbished printers that meet the highest standards of performance and quality. Our team of experts meticulously inspects, repairs, and tests each printer to ensure it operates like new. Our commitment to excellence ensures you receive exceptional value without compromising on quality.',
//   },
//   {
//     id: 3,
//     title: 'Our Mission',
//     content:
//       'Our mission is to make premium printing solutions accessible to everyone. By refurbishing and reselling printers, we provide an eco-friendly option that helps reduce electronic waste and promotes sustainability. We believe in delivering products that not only meet your needs but also contribute to a healthier planet.',
//   },
//   {
//     id: 4,
//     title: 'What We Offer',
//     content:
//       'High-Quality Refurbished Printers: Each printer undergoes rigorous testing and certification to ensure it meets our stringent quality standards.\nCost-Effective Solutions: Enjoy significant savings without sacrificing performance. Our refurbished printers offer the same functionality as new ones at a fraction of the cost.\nEco-Friendly Options: Choosing refurbished helps reduce electronic waste and supports environmentally conscious practices.\nComprehensive Warranty: All our refurbished printers come with a six-month warranty, providing you with peace of mind and assurance of quality.\nExceptional Customer Support: Our dedicated customer service team is always ready to assist you with any questions or concerns. We are committed to providing excellent support to ensure your satisfaction.',
//   },
//   {
//     id: 5,
//     title: 'Warranty and Returns',
//     content:
//       'We stand behind the quality of our products with a six-month warranty on all refurbished printers. This warranty covers defects in materials and workmanship under normal use. Detailed warranty terms and conditions are provided with each product. Additionally, we offer a clear and fair return policy, which can be found on our Returns page. We encourage customers to review these details before making a purchase to ensure complete satisfaction.',
//   },
//   {
//     id: 6,
//     title: 'Our Commitment',
//     content:
//       'At Micro Sonic Repair , we are more than just a printer supplier. We are your partners in achieving efficient and eco-friendly printing solutions. Our commitment to quality, affordability, and sustainability drives everything we do. We strive to exceed your expectations and provide you with the best possible experience.',
//   },
//   {
//     id: 7,
//     title: '',
//     content:
//       'Thank you for choosing Micro Sonic Repair . We look forward to helping you find the perfect printer that meets your needs and exceeds your expectations.',
//   },
// ];

// const About = () => {
//   return (
//     <>
//     <div className="bg-teal-50 py-10">
//       <div className="container mx-auto px-4 mt-20 bg-gray-100  shadow-inner p-3">
//         <h1 className="text-[#0f766e] text-3xl font-bold  text-center p-3">
//           Welcome to Micro Sonic Repair !
//         </h1>
//         <section>
//           {content.map((section) => (
//             <div
//               key={section.id}
//               className="mb-8 bg-white p-6 rounded-lg shadow-md"
//             >
//               {section.title && (
//                 <h2 className="text-2xl  text-[#0f766e] mb-4 text-center">
//                   {section.title}
//                 </h2>
//               )}
//               <p className="text-gray-700 text-lg whitespace-pre-line">
//                 {section.content}
//               </p>
//             </div>
//           ))}
//         </section>
//       </div>
//     </div>
//     </>
//   );
// };

// export default About;



import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-teal-700 to-teal-800 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div 
            className="absolute top-0 left-0 right-0 h-full bg-cover bg-center opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByaW50ZXJ8ZW58MHx8MHx8fDA%3D')",
            }}
          ></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Micro Sonic Repair</h1>
          <p className="text-xl max-w-3xl mx-auto">
            At Micro Sonic Repair, we specialize in refurbished printers that meet the highest standards of quality and performance.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6">
              Each device is carefully inspected, tested, and certified to ensure it works like new. Our goal is to deliver affordable, eco-friendly printing solutions without compromising on reliability.
            </p>
            <div className="h-1 w-20 bg-teal-500 my-8"></div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Who We Are
              </h2>
              <p className="text-lg text-gray-700">
                We are an independent IT solutions and printer services provider committed to making technology simple and affordable. By offering certified refurbished printers and professional setup assistance, we help individuals and businesses save money while reducing e-waste.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW0lMjBvZiUyMHRlY2huaWNpYW5zfGVufDB8fDB8fHww"
                alt="Our team"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-teal-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              Our mission is to provide sustainable and cost-effective printing solutions for homes and businesses. By giving printers a second life through refurbishment, we reduce electronic waste and promote environmentally conscious practices — helping our customers and the planet at the same time.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">High-Quality Refurbished Printers</h3>
              <p className="text-gray-600">Each printer undergoes rigorous testing and certification for dependable performance.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Affordable Solutions</h3>
              <p className="text-gray-600">Save significantly compared to buying new devices, without compromising quality.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Eco-Friendly Options</h3>
              <p className="text-gray-600">Reduce electronic waste by choosing refurbished products.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Warranty Coverage</h3>
              <p className="text-gray-600">All refurbished printers include warranty protection for peace of mind.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform hover:-translate-y-1 duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Customer Assistance</h3>
              <p className="text-gray-600">Our dedicated support team is available to help with setup and general product inquiries.</p>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Quality Commitment</h2>
            <p className="text-lg text-gray-700 mb-8">
              We stand behind the quality of every refurbished printer we sell. Our goal is to provide customers with products that are not only cost-effective but also reliable and backed by confidence.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Warranty Coverage
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-sm font-bold">•</span>
                  </div>
                  <span className="text-gray-700">All refurbished printers come with a 6-month limited warranty covering defects in materials and workmanship under normal use.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-sm font-bold">•</span>
                  </div>
                  <span className="text-gray-700">Warranty service includes replacement, repair (where applicable), or refund, at our discretion, if a product is found to be defective within the coverage period.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-sm font-bold">•</span>
                  </div>
                  <span className="text-gray-700">Extended warranty options may be available with select purchases or service plans.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Return Policy Section */}
        <section className="mb-20">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Return Policy
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-teal-600 text-sm font-bold">•</span>
                </div>
                <span className="text-gray-700">We offer a 7-day return policy for all refurbished printers purchased directly from us, provided the product is returned in its original condition.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-teal-600 text-sm font-bold">•</span>
                </div>
                <span className="text-gray-700">Refunds are processed within 7–10 business days after the returned product is inspected and approved.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-100 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <span className="text-teal-600 text-sm font-bold">•</span>
                </div>
                <span className="text-gray-700">Customers are responsible for return shipping unless the printer arrives damaged, defective, or incorrect.</span>
              </li>
            </ul>

            <div className="bg-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Customer Responsibilities</h3>
              <p className="text-gray-700 mb-4">To ensure eligibility for warranty or returns, customers should:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-xs font-bold">•</span>
                  </div>
                  <span className="text-gray-700">Retain proof of purchase (invoice or receipt).</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-xs font-bold">•</span>
                  </div>
                  <span className="text-gray-700">Use the product under normal conditions as described in the warranty terms.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-xs font-bold">•</span>
                  </div>
                  <span className="text-gray-700">Contact our support team immediately if an issue arises, so we can resolve it quickly.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Subscription Policy Section */}
        {/* <section className="mb-20">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Subscription & Membership Return / Cancellation Policy
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At Micro Sonic Solutions, we aim to provide clear and fair policies for all subscription and membership services.
            </p>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subscription Coverage</h3>
              <p className="text-gray-700">
                Our service plans (e.g., Priority Assistance Plans, Premium Support Plans) include ongoing benefits such as setup assistance, priority troubleshooting, and warranty extensions for refurbished printers purchased from us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Cancellation Policy
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-teal-600 text-xs font-bold">•</span>
                    </div>
                    <span className="text-gray-700">Customers may cancel their subscription at any time through their account dashboard or by contacting our support team.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-teal-600 text-xs font-bold">•</span>
                    </div>
                    <span className="text-gray-700">No cancellation fees apply.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-teal-600 text-xs font-bold">•</span>
                    </div>
                    <span className="text-gray-700">If cancellation occurs, access to subscription benefits will continue until the end of the current billing cycle.</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Refund Policy for Subscriptions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-teal-600 text-xs font-bold">•</span>
                    </div>
                    <span className="text-gray-700">Monthly Plans: Fees for the current month are non-refundable once billed. Cancellations will apply to the next billing cycle.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-teal-600 text-xs font-bold">•</span>
                    </div>
                    <span className="text-gray-700">Annual Plans: Refunds are available within the first 14 days of purchase if no services have been used. After 14 days, cancellations will be effective at the end of the current term, and no partial refunds will be issued.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Renewal Policy</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-xs font-bold">•</span>
                  </div>
                  <span className="text-gray-700">Subscriptions renew automatically at the end of each billing cycle unless canceled in advance.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-xs font-bold">•</span>
                  </div>
                  <span className="text-gray-700">Customers will be notified by email prior to renewal.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">Exceptions</h3>
              <p className="text-gray-700 mb-4">Refunds may be issued outside the above rules in cases where:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-xs font-bold">•</span>
                  </div>
                  <span className="text-gray-700">A technical error caused duplicate billing.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-teal-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-teal-600 text-xs font-bold">•</span>
                  </div>
                  <span className="text-gray-700">A service benefit promised in the plan was not delivered.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact for Cancellations & Refunds</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-3 rounded-xl mr-4">
                    <span className="text-teal-600 font-semibold">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">billing@microsonicrepair.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-teal-100 p-3 rounded-xl mr-4">
                    <span className="text-teal-600 font-semibold">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">[Insert US Number]</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Commitment Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We are more than just a printer supplier — we are your partners in providing affordable, eco-friendly printing solutions. Our commitment to quality, transparency, and sustainability drives everything we do. By choosing Micro Sonic Repair, you not only receive reliable technology but also contribute to reducing e-waste and supporting a greener planet.
            </p>
            <p className="text-xl font-semibold">
              Thank you for choosing Micro Sonic Repair. We look forward to serving you with reliable products, clear policies, and complete peace of mind.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;