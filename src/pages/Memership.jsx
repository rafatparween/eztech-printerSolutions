import React, { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import Facilities from '../sections/Facilities';
import CustomerReview from '../sections/CustomerReview';

const includedFeatures = [
  'Unlimited 24/7 Online Support',
  'Premium Antivirus Software',
  'Premium Password Manager',
  'Only $69 for In-Home Services',
];

export default function Membership() {
  const [billingOption, setBillingOption] = useState('annually');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSelectMembership = () => {
    if (billingOption === '') {
      alert('Please select a billing option.');
    } else {
      setResponseMessage('Response sent!');
    }
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
          <div className="mx-auto max-w-2xl sm:text-center mt-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              In a EzTech PrinterSolutions, technology just works
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">
              The support you need for any smart home device, all in one
              package. Learn More
            </p>
          </div>
          <div
            className="bg-white shadow-2xl mx-auto mt-16 max-w-2xl rounded-3xl 
        ring-1 ring-gray-100 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
          >
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Choose your membership:
              </h3>
              <div className="mt-4">
                <label className="mr-6">
                  <input
                    type="radio"
                    name="billingOption"
                    value="annually"
                    checked={billingOption === 'annually'}
                    onChange={() => setBillingOption('annually')}
                    className="mr-2"
                  />
                  Pay Annually - Save 20%
                </label>
                <label>
                  <input
                    type="radio"
                    name="billingOption"
                    value="monthly"
                    checked={billingOption === 'monthly'}
                    onChange={() => setBillingOption('monthly')}
                    className="mr-2"
                  />
                  Pay Monthly
                </label>
              </div>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-teal-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-teal-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* -------------------------- CARDS --------------------- */}
            {billingOption === 'annually' ? (
              <>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">
                        HelloTech Home
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $16.58
                        </span>
                      </p>
                      <p>$19.99 / month</p>
                      <p>$199 billed annually</p>
                      <button
                        onClick={handleSelectMembership}
                        className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
                      >
                        Select Membership
                      </button>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">
                        HelloTech Lite
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $4.17
                        </span>
                      </p>
                      <p>$4.99 / month</p>
                      <p>$49.99 billed annually</p>
                      <button
                        onClick={handleSelectMembership}
                        className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
                      >
                        Get access
                      </button>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">
                        HelloTech Home
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $19.99
                        </span>
                      </p>
                      <p>/ month</p>
                      <p>Annual plan, billed monthly</p>
                      <button
                        onClick={handleSelectMembership}
                        className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
                      >
                        Select Membership
                      </button>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                  <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-100 lg:flex lg:flex-col lg:justify-center lg:py-16">
                    <div className="mx-auto max-w-xs px-8">
                      <p className="text-base font-semibold text-gray-600">
                        HelloTech Lite
                      </p>
                      <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $4.99
                        </span>
                      </p>
                      <p>/ month</p>
                      <p>Annual plan, billed monthly</p>
                      <button
                        onClick={handleSelectMembership}
                        className="mt-10 block w-full rounded-md bg-teal-600 px-3 py-2
                      text-center text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-600"
                      >
                        Get access
                      </button>
                      <p className="mt-6 text-xs leading-5 text-gray-600">
                        Invoices and receipts available for easy company
                        reimbursement
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Facilities />
      <CustomerReview />
    </>
  );
}
