// import React, { useState } from 'react';
// import { CheckIcon } from '@heroicons/react/20/solid';
// import Facilities from '../sections/Facilities';
// import CustomerReview from '../sections/CustomerReview';

// const includedFeatures = [
//   'Unlimited 24/7 Online Support',
//   'Premium Antivirus Software',
//   'Premium Password Manager',
//   'Only $69 for In-Home Services',
// ];

// export default function Membership() {
//   const [billingOption, setBillingOption] = useState('annually');
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleSelectMembership = () => {
//     if (billingOption === '') {
//       alert('Please select a billing option.');
//     } else {
//       setResponseMessage('Response sent!');
//     }
//   };

//   return (
//     <>
//       <div
//         style={{
//           backgroundImage: `url("https://img.freepik.com/free-photo/cheerful-business-partners-making-fist-bump_1262-16880.jpg?t=st=1717147435~exp=1717151035~hmac=680f507115728807795d8f7f6177545d7c519a92abbd648410ff4372294df004&w=826")`,
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundAttachment: 'fixed',
//         }}
//       >
//         <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 ">
//           <div className="mx-auto max-w-2xl sm:text-center mt-20">
//             <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
//               In a Micro Sonic Repair , technology just works
//             </h2>
//             <p className="mt-6 text-lg leading-8 text-white">
//               The support you need for any smart home device, all in one
//               package. Learn More
//             </p>
//           </div>
//           <div
//             className="bg-white shadow-2xl mx-auto mt-16 max-w-2xl rounded-3xl 
//         ring-1 ring-gray-100 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
//           >
//             <div className="p-8 sm:p-10 lg:flex-auto">
//               <h3 className="text-2xl font-bold tracking-tight text-gray-900">
//                 Choose your membership:
//               </h3>
//               <div className="mt-4">
//                 <label className="mr-6">
//                   <input
//                     type="radio"
//                     name="billingOption"
//                     value="annually"
//                     checked={billingOption === 'annually'}
//                     onChange={() => setBillingOption('annually')}
//                     className="mr-2"
//                   />
//                   Pay Annually - Save 20%
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="billingOption"
//                     value="monthly"
//                     checked={billingOption === 'monthly'}
//                     onChange={() => setBillingOption('monthly')}
//                     className="mr-2"
//                   />
//                   Pay Monthly
//                 </label>
//               </div>
//               <div className="mt-10 flex items-center gap-x-4">
//                 <h4 className="flex-none text-sm font-semibold leading-6 text-teal-600">
//                   What’s included
//                 </h4>
//                 <div className="h-px flex-auto bg-gray-100" />
//               </div>
//               <ul
//                 role="list"
//                 className="mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
//               >
//                 {includedFeatures.map((feature) => (
//                   <li key={feature} className="flex gap-x-3">
//                     <CheckIcon
//                       className="h-6 w-5 flex-none text-teal-600"
//                       aria-hidden="true"
//                     />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* -------------------------- CARDS --------------------- */}
//             {billingOption === 'annually' ? (
//               <>
//                 <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//                   <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                     <div className="mx-auto max-w-xs px-8">
//                       <p className="text-base font-semibold text-gray-600">
//                         Ez Tech
//                       </p>
//                       <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                         <span className="text-5xl font-bold tracking-tight text-gray-900">
//                           $16.58
//                         </span>
//                       </p>
//                       <p>$19.99 / month</p>
//                       <p>$199 billed annually</p>
//                       <button
//                         onClick={handleSelectMembership}
//                         className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
//                       >
//                         Select Membership
//                       </button>
//                       <p className="mt-6 text-xs leading-5 text-gray-600">
//                         Invoices and receipts available for easy company
//                         reimbursement
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//                   <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                     <div className="mx-auto max-w-xs px-8">
//                       <p className="text-base font-semibold text-gray-600">
//                         Ez Tech
//                       </p>
//                       <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                         <span className="text-5xl font-bold tracking-tight text-gray-900">
//                           $4.17
//                         </span>
//                       </p>
//                       <p>$4.99 / month</p>
//                       <p>$49.99 billed annually</p>
//                       <button
//                         onClick={handleSelectMembership}
//                         className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
//                       >
//                         Get access
//                       </button>
//                       <p className="mt-6 text-xs leading-5 text-gray-600">
//                         Invoices and receipts available for easy company
//                         reimbursement
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//                   <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                     <div className="mx-auto max-w-xs px-8">
//                       <p className="text-base font-semibold text-gray-600">
//                          Ez Tech
//                       </p>
//                       <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                         <span className="text-5xl font-bold tracking-tight text-gray-900">
//                           $19.99
//                         </span>
//                       </p>
//                       <p>/ month</p>
//                       <p>Annual plan, billed monthly</p>
//                       <button
//                         onClick={handleSelectMembership}
//                         className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
//                       >
//                         Select Membership
//                       </button>
//                       <p className="mt-6 text-xs leading-5 text-gray-600">
//                         Invoices and receipts available for easy company
//                         reimbursement
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
//                   <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
//                     <div className="mx-auto max-w-xs px-8">
//                       <p className="text-base font-semibold text-gray-600">
//                          Ez Tech
//                       </p>
//                       <p className="mt-6 flex items-baseline justify-center gap-x-2">
//                         <span className="text-5xl font-bold tracking-tight text-gray-900">
//                           $4.99
//                         </span>
//                       </p>
//                       <p>/ month</p>
//                       <p>Annual plan, billed monthly</p>
//                       <button
//                         onClick={handleSelectMembership}
//                         className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2
//                       text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
//                       >
//                         Get access
//                       </button>
//                       <p className="mt-6 text-xs leading-5 text-gray-600">
//                         Invoices and receipts available for easy company
//                         reimbursement
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <Facilities />
//       <CustomerReview />
//     </>
//   );
// }



import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Facilities from '../sections/Facilities';
import CustomerReview from '../sections/CustomerReview';

const standardFeatures = [
  'Access to priority email support',
  'Step-by-step printer & device setup guidance',
  'Software and connectivity help',
  'Basic troubleshooting assistance',
];

const premiumFeatures = [
  'Priority phone & online support',
  'Device setup & optimization assistance',
  'Data transfer guidance',
  'Extended warranty coverage for refurbished printers',
];

export default function Membership() {
  const [billingOption, setBillingOption] = useState('annually');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSelectMembership = (plan) => {
    setSelectedPlan(plan);
    setResponseMessage(`Thank you for selecting the ${plan} plan! We'll contact you shortly.`);
    
    // Scroll to message
    setTimeout(() => {
      const element = document.getElementById('response-message');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url("https://img.freepik.com/free-photo/cheerful-business-partners-making-fist-bump_1262-16880.jpg?t=st=1717147435~exp=1717151035~hmac=680f507115728807795d8f7f6177545d7c519a92abbd648410ff4372294df004&w=826")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 ">
          <div className="mx-auto max-w-4xl sm:text-center mt-20">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Priority Assistance Plans
            </h2>
            <p className="mt-6 text-xl leading-8 text-white">
              Get ongoing support for your home or office devices with our affordable service plans.
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1 flex">
              <button
                onClick={() => setBillingOption('annually')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${billingOption === 'annually' ? 'bg-teal-600 text-white' : 'text-white hover:bg-white/10'}`}
              >
                Bill Annually (Save 20%)
              </button>
              <button
                onClick={() => setBillingOption('monthly')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${billingOption === 'monthly' ? 'bg-teal-600 text-white' : 'text-white hover:bg-white/10'}`}
              >
                Bill Monthly
              </button>
            </div>
          </div>

          {/* Plans Container */}
          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Standard Plan */}
            <div className="flex flex-col rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl ring-1 ring-gray-200">
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                  Standard Plan
                </h3>
                <div className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    ${billingOption === 'annually' ? '79.99' : '7.99'}
                  </span>
                  <span className="text-lg font-semibold leading-6 text-gray-600">
                    {billingOption === 'annually' ? '/year' : '/month'}
                  </span>
                </div>
                {billingOption === 'annually' && (
                  <p className="mt-2 text-sm text-gray-500">That's just $6.67/month</p>
                )}
                <p className="mt-6 text-sm leading-6 text-gray-600">
                  Perfect for individuals and small offices needing basic support
                </p>

                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-teal-600">
                    What's included
                  </h4>
                  <div className="h-px flex-auto bg-gray-300" />
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {standardFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-teal-600" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-1 flex-col p-2 pt-0">
                <div className="flex-1 rounded-2xl bg-gray-50 p-6 text-center ring-1 ring-inset ring-gray-200">
                  <button
                    onClick={() => handleSelectMembership('Standard')}
                    className="w-full rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  >
                    Select Standard Plan
                  </button>
                  <p className="mt-3 text-xs leading-5 text-gray-600">
                    No hidden fees · Cancel anytime
                  </p>
                </div>
              </div>
            </div>

            {/* Premium Plan */}
            <div className="flex flex-col rounded-3xl bg-teal-900 shadow-xl ring-1 ring-teal-700">
              <div className="p-8 sm:p-10 text-white">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold tracking-tight">
                    Premium Plan
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-teal-600 px-2.5 py-0.5 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
                <div className="mt-6 flex items-baseline gap-x-2">
                  <span className="text-5xl font-bold tracking-tight">
                    ${billingOption === 'annually' ? '199.99' : '16.99'}
                  </span>
                  <span className="text-lg font-semibold leading-6 text-teal-200">
                    {billingOption === 'annually' ? '/year' : '/month'}
                  </span>
                </div>
                {billingOption === 'annually' && (
                  <p className="mt-2 text-sm text-teal-200">That's just $16.67/month</p>
                )}
                <p className="mt-6 text-sm leading-6 text-teal-100">
                  Comprehensive support for businesses and power users
                </p>

                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-sm font-semibold leading-6 text-teal-300">
                    Everything in Standard, plus:
                  </h4>
                  <div className="h-px flex-auto bg-teal-700" />
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-teal-100">
                  {premiumFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-teal-300" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-1 flex-col p-2 pt-0">
                <div className="flex-1 rounded-2xl bg-teal-800/50 p-6 text-center ring-1 ring-inset ring-teal-700">
                  <button
                    onClick={() => handleSelectMembership('Premium')}
                    className="w-full rounded-md bg-white px-3 py-2 text-sm font-semibold text-teal-900 shadow-sm hover:bg-teal-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Select Premium Plan
                  </button>
                  <p className="mt-3 text-xs leading-5 text-teal-200">
                    No hidden fees · Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* All Plans Features */}
          <div className="mt-16 max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
              All plans include:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-teal-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">Transparent Pricing</h4>
                <p className="mt-2 text-sm text-gray-600">No hidden fees or surprise charges</p>
              </div>
              <div className="p-4">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-teal-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">Easy Cancellation</h4>
                <p className="mt-2 text-sm text-gray-600">Cancel your plan anytime without hassle</p>
              </div>
              <div className="p-4">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-teal-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <h4 className="mt-4 font-semibold text-gray-900">Priority Online Assistance</h4>
                <p className="mt-2 text-sm text-gray-600">Fast response times for printers & devices</p>
              </div>
            </div>
          </div>

          {/* Response Message */}
          {responseMessage && (
            <div id="response-message" className="mt-12 max-w-2xl mx-auto bg-teal-50 rounded-xl p-6 shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckIcon className="h-5 w-5 text-teal-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-teal-800">Plan selected</h3>
                  <div className="mt-2 text-sm text-teal-700">
                    <p>{responseMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Facilities />
      <CustomerReview />
    </>
  );
}