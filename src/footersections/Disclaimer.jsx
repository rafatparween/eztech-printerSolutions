import React from 'react';

const Disclaimer = () => {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mt-10">
        <div className="p-6 lg:p-8">
          {disclaimerContent.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-teal-600 mb-4">
                {section.sectionTitle}
              </h2>
              <ul className="list-disc list-inside text-gray-700">
                {section.content.map((paragraph, idx) => (
                  <li key={idx} className="mb-2 leading-7">
                    {paragraph}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;

const disclaimerContent = [
  {
    sectionTitle: 'Disclaimer for Ez Tech Printer Solutions',
    content: [
      'If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at support@eztechprintersolutions.com.',
    ],
  },
  {
    sectionTitle: 'General Information',
    content: [
      'The information provided by Ez Tech Printer Solutions on this website is for general informational purposes only. While we strive to ensure the accuracy and reliability of our refurbished printers, we do not make any warranties or guarantees about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.',
    ],
  },
  {
    sectionTitle: 'Product Condition and Availability',
    content: [
      'All refurbished printers sold by Ez Tech Printer Solutions have been thoroughly inspected, tested, and certified by our skilled technicians. However, as these are pre-owned items, they may show minor signs of previous use. We ensure that all functionality meets our rigorous standards, but physical imperfections may exist. Availability of specific models may vary, and we cannot guarantee the availability of any particular product.',
    ],
  },
  {
    sectionTitle: 'Warranty and Returns',
    content: [
      'Ez Tech Printer Solutions offers a six-month warranty on all refurbished printers. The terms and conditions of the warranty, including the duration and coverage, are outlined in the warranty documentation provided with each product. The warranty covers defects in materials and workmanship under normal use during the warranty period. We also provide a return policy, the details of which can be found on our Returns page. Customers are encouraged to review the warranty and return policy details before making a purchase. Any claims under the warranty must be made in accordance with the procedures outlined in the warranty documentation.',
    ],
  },
  {
    sectionTitle: 'Limitation of Liability',
    content: [
      'In no event will Ez Tech Printer Solutions be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits, arising out of or in connection with the use of this website or the purchase and use of our products.',
    ],
  },
  {
    sectionTitle: 'External Links',
    content: [
      'Through this website, you may be able to link to other websites which are not under the control of Ez Tech Printer Solutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
    ],
  },
  {
    sectionTitle: 'Legal Compliance',
    content: [
      'Ez Tech Printer Solutions operates in compliance with all applicable laws and regulations of the United States. It is the responsibility of the customer to ensure that their use of our products complies with any applicable local, state, or federal laws.',
    ],
  },
  {
    sectionTitle: 'Governing Law',
    content: [
      'This disclaimer and any disputes arising out of or in connection with the use of this website or the purchase of our products shall be governed by and construed in accordance with the laws of the United States.',
    ],
  },
  {
    sectionTitle: 'Modifications',
    content: [
      'Ez Tech Printer Solutions reserves the right to modify this disclaimer at any time. Any changes will be posted on this page, and it is your responsibility to review this page periodically for updates.',
    ],
  },
  {
    sectionTitle: 'Contact Information',
    content: [
      'If you have any questions or concerns about this disclaimer, please contact our customer service team at:',
      'Email: support@eztechprintersolutions.com',
    ],
  },
  {
    sectionTitle: 'Agreement',
    content: [
      'By using our website and purchasing our products, you agree to this disclaimer in full. If you do not agree with any part of this disclaimer, you must not use our website or purchase our products. Thank you for choosing Ez Tech Printer Solutions.',
    ],
  },
];
