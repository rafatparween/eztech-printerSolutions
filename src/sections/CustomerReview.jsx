// import React from 'react';

// const CustomerReview = () => {
//   const reviews = [
//     {
//       name: 'Michael Johnson',
//       date: 'June 10, 2024',
//       content:
//         'I recently purchased a refurbished laser printer from  Micro Sonic Repair  and I couldn’t be happier. The printer works flawlessly and the print quality is just like new. The customer service was also very helpful in answering my queries. Highly recommend!',
//     },
//     {
//       name: 'Lisa Brown',
//       date: 'May 28, 2024',
//       content:
//         'Micro Sonic Repair has exceeded my expectations. The refurbished inkjet printer I bought was in excellent condition and the price was unbeatable. Their team provided great support throughout the purchase process.',
//     },
//     {
//       name: 'David Wilson',
//       date: 'April 15, 2024',
//       content:
//         'The multifunction printer I got from Micro Sonic Repair is a great deal. It looks and functions like new. I’m impressed with their quality control and attention to detail. Would definitely buy from them again.',
//     },
//   ];

//   return (
//     <section className="bg-teal-50 py-8">
//       <div className="max-w-screen-xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-[#0f766e] text-center mb-8">
//           Customer Reviews
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {reviews.map((review, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <p className="text-gray-600 italic mb-4">"{review.content}"</p>
//               <div className="text-right">
//                 <p className="text-[#0f766e] font-semibold">{review.name}</p>
//                 <p className="text-gray-500 text-sm">{review.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CustomerReview;



import React, { useState } from 'react';

const CustomerReview = () => {
  const [activeReview, setActiveReview] = useState(0);
  
  const reviews = [
    {
      name: 'Michael Johnson',
      date: 'June 10, 2024',
      content: 'I recently purchased a refurbished laser printer from Micro Hub Care and I couldn’t be happier. The printer works flawlessly and the print quality is just like new. The customer service was also very helpful in answering my queries. Highly recommend!',
      rating: 5,
      avatar: 'MJ',
      product: 'Laser Printer X200'
    },
    {
      name: 'Lisa Brown',
      date: 'May 28, 2024',
      content: 'Micro Hub Care has exceeded my expectations. The refurbished inkjet printer I bought was in excellent condition and the price was unbeatable. Their team provided great support throughout the purchase process.',
      rating: 4,
      avatar: 'LB',
      product: 'Inkjet Pro 450'
    },
    {
      name: 'David Wilson',
      date: 'April 15, 2024',
      content: 'The multifunction printer I got from Micro Hub Care is a great deal. It looks and functions like new. I’m impressed with their quality control and attention to detail. Would definitely buy from them again.',
      rating: 5,
      avatar: 'DW',
      product: 'Multifunction Elite'
    },
    {
      name: 'Sarah Kim',
      date: 'June 2, 2024',
      content: 'Fast delivery and excellent packaging. The scanner I purchased works perfectly and looks brand new. Will be returning for future tech needs!',
      rating: 4,
      avatar: 'SK',
      product: 'Document Scanner S5'
    },
    {
      name: 'James Anderson',
      date: 'May 15, 2024',
      content: 'Outstanding quality for a refurbished product. My new laptop runs smoothly and came with all the promised specifications. Great value for money!',
      rating: 5,
      avatar: 'JA',
      product: 'Business Laptop Pro'
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-800 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-teal-600 max-w-3xl mx-auto">
            Don't just take our word for it - read testimonials from our satisfied customers
          </p>
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {reviews.slice(0, 3).map((review, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold">
                      {review.avatar}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-teal-600">{review.product}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600 italic mb-4">"{review.content}"</p>
                <p className="text-sm text-gray-500 text-right">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold">
                  {reviews[activeReview].avatar}
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">{reviews[activeReview].name}</h4>
                <p className="text-sm text-teal-600">{reviews[activeReview].product}</p>
              </div>
            </div>
            <div className="flex mb-4">
              {renderStars(reviews[activeReview].rating)}
            </div>
            <p className="text-gray-600 italic mb-4">"{reviews[activeReview].content}"</p>
            <p className="text-sm text-gray-500 text-right">{reviews[activeReview].date}</p>
          </div>
          
          <div className="flex justify-between items-center mt-6">
            <button 
              onClick={prevReview}
              className="p-3 rounded-full bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveReview(index)}
                  className={`w-3 h-3 rounded-full ${index === activeReview ? 'bg-teal-600' : 'bg-teal-200'}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextReview}
              className="p-3 rounded-full bg-teal-100 text-teal-800 hover:bg-teal-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold text-teal-800 mb-4">Ready to share your experience?</h3>
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors shadow-md">
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;

