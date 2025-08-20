import React from 'react';

const content = [
  {
    id: 2,
    title: 'Who We Are',
    content:
      'At Micro Sonic Repair , we specialize in selling refurbished printers that meet the highest standards of performance and quality. Our team of experts meticulously inspects, repairs, and tests each printer to ensure it operates like new. Our commitment to excellence ensures you receive exceptional value without compromising on quality.',
  },
  {
    id: 3,
    title: 'Our Mission',
    content:
      'Our mission is to make premium printing solutions accessible to everyone. By refurbishing and reselling printers, we provide an eco-friendly option that helps reduce electronic waste and promotes sustainability. We believe in delivering products that not only meet your needs but also contribute to a healthier planet.',
  },
  {
    id: 4,
    title: 'What We Offer',
    content:
      'High-Quality Refurbished Printers: Each printer undergoes rigorous testing and certification to ensure it meets our stringent quality standards.\nCost-Effective Solutions: Enjoy significant savings without sacrificing performance. Our refurbished printers offer the same functionality as new ones at a fraction of the cost.\nEco-Friendly Options: Choosing refurbished helps reduce electronic waste and supports environmentally conscious practices.\nComprehensive Warranty: All our refurbished printers come with a six-month warranty, providing you with peace of mind and assurance of quality.\nExceptional Customer Support: Our dedicated customer service team is always ready to assist you with any questions or concerns. We are committed to providing excellent support to ensure your satisfaction.',
  },
  {
    id: 5,
    title: 'Warranty and Returns',
    content:
      'We stand behind the quality of our products with a six-month warranty on all refurbished printers. This warranty covers defects in materials and workmanship under normal use. Detailed warranty terms and conditions are provided with each product. Additionally, we offer a clear and fair return policy, which can be found on our Returns page. We encourage customers to review these details before making a purchase to ensure complete satisfaction.',
  },
  {
    id: 6,
    title: 'Our Commitment',
    content:
      'At Micro Sonic Repair , we are more than just a printer supplier. We are your partners in achieving efficient and eco-friendly printing solutions. Our commitment to quality, affordability, and sustainability drives everything we do. We strive to exceed your expectations and provide you with the best possible experience.',
  },
  {
    id: 7,
    title: '',
    content:
      'Thank you for choosing Micro Sonic Repair . We look forward to helping you find the perfect printer that meets your needs and exceeds your expectations.',
  },
];

const About = () => {
  return (
    <>
    <div className="bg-teal-50 py-10">
      <div className="container mx-auto px-4 mt-20 bg-gray-100  shadow-inner p-3">
        <h1 className="text-[#0f766e] text-3xl font-bold  text-center p-3">
          Welcome to Micro Sonic Repair !
        </h1>
        <section>
          {content.map((section) => (
            <div
              key={section.id}
              className="mb-8 bg-white p-6 rounded-lg shadow-md"
            >
              {section.title && (
                <h2 className="text-2xl  text-[#0f766e] mb-4 text-center">
                  {section.title}
                </h2>
              )}
              <p className="text-gray-700 text-lg whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
    </>
  );
};

export default About;
