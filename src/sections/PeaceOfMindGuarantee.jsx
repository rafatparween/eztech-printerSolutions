import React from 'react';
import ShieldIcon from '@mui/icons-material/Shield';

const PeaceOfMindGuarantee = () => {
  return (
    <main className="bg-teal-50 flex items-center justify-center py-10">
      <div className="bg-white p-8 rounded-lg w-11/12 max-w-6xl mx-auto flex flex-col md:flex-row items-center shadow-xl">
        <img
          src="https://media.licdn.com/dms/image/C5612AQHeqVyqoS54yQ/article-cover_image-shrink_720_1280/0/1593932828952?e=1724284800&v=beta&t=wkWLfULUr84JhYAx_BH5KAfeKHFvfM_2SIi4KBamMoc"
          alt="Peace of Mind"
          className="rounded-lg shadow-xl mb-6 md:mb-0 md:mr-8 w-full md:w-1/2 h-[85vh] object-cover"
        />
        <section className="text-left text-gray-700 w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-4 text-center text-[#0f766e] border-b-2 border-[#0f766e] ">
            Peace of Mind Guarantee
          </h2>
          <p className="text-lg mb-4">
            At EzTech PrinterSolutions, we ensure you feel confident and secure
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
