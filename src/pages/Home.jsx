import BuildIcon from '@mui/icons-material/Build';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CustomerReview from '../sections/CustomerReview';
import HelpPage from '../sections/HelpPage';
import PeaceOfMindGuarantee from '../sections/PeaceOfMindGuarantee';
import JivoChat from '../JivoChat';

const Home = () => {
  return (
    <>
      <div className="bg-teal-50 min-h-screen flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto w-90 p-8 bg-white shadow-lg  overflow-hidden mt-20">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <h1 className="text-4xl font-bold text-[#0f766e] mb-4">
                Welcome to Micro Hub Care
 !{' '}
              </h1>
              <p className="text-gray-700 text-lg mb-4">
                Welcome to our independent third-party company specializing in
                refurbished printers. We offer high-quality printers that have
                been meticulously restored to perform like new.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Whether you need a laser printer, inkjet printer, or
                multifunction printer, we have a wide selection to meet your
                needs. Browse our catalog and find the perfect printer for your
                home or office. Each refurbished printer undergoes rigorous
                testing to ensure reliability and performance, backed by our
                warranty for peace of mind.
              </p>
            </div>
            <div className="md:w-1/2 p-4 flex items-center justify-center">
              <img
                src="https://img.freepik.com/premium-photo/close-up-office-table-with-printer-it_93675-81686.jpg?w=826"
                alt="Refurbished Printer"
                className="rounded-lg shadow-xl h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- */}
      <section className="bg-teal-50 py-4 flex justify-center items-center">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <BuildIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-[#0f766e] mt-2">Thousands of Techs Nationwide</p>
          </div>

          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <AccessTimeIcon style={{ color: '#1e3a8a', marginTop: '8px' }} />
            <p className="text-[#0f766e] mt-2">Service as Soon as Today</p>
          </div>

          <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-lg">
            <CheckCircleOutlineIcon
              style={{ color: '#1e3a8a', marginTop: '8px' }}
            />
            <p className="text-[#0f766e] mt-2">Don’t Pay Until It’s Done</p>
          </div>
        </div>
      </section>
      <PeaceOfMindGuarantee />
      <CustomerReview />
      <HelpPage />
      <JivoChat/>
    </>
  );
};

export default Home;
