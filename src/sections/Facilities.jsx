// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import ChatIcon from '@mui/icons-material/Chat';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import CheckIcon from '@mui/icons-material/Check';

// const Facilities = () => {
//   const items = [
//     'Safety & Security',
//     'Convenience',
//     'Unlimited Support',
//     'Reliability',
//     'Peace of mind',
//   ];

//   return (
//     <main>
//       <section className="bg-gray-100 p-8 shadow-inner">
//         <div className="flex gap-6 items-center justify-center  flex-col">
//           <h2 className="text-3xl font-semibold text-center text-teal-600">
//             Everything you get, in a nutshell
//           </h2>

//           <ul className="flex gap-5 bg-white px-5 py-2 shadow-2xl rounded">
//             {items.map((value, index) => (
//               <li key={index} className="flex items-center text-teal-600">
//                 <CheckIcon sx={{ color: '#0f766e' }} />
//                 <span className="ml-2">{value}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>

//       <div className="flex justify-center items-center p-5">
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8  w-[90%] ">
//           <div className="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
//             <SupportAgentIcon sx={{ fontSize: '4.5rem', color: '#0f766e' }} />
//             <p className="text-center mt-2 text-lg font-bold text-teal-600">
//               Online Tech Specialist
//             </p>
//             <p className="text-center text-teal-600">
//               Unlimited, instant help with any connected device. No appointments
//               needed.
//             </p>
//           </div>

//           <div className="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
//             <ChatIcon sx={{ fontSize: '4rem', color: '#0f766e' }} />
//             <p className="text-center mt-2 text-lg font-bold text-teal-600">
//               Unlimited 24/7 Online Support
//             </p>
//             <p className="text-center text-teal-600">
//               Get free 'round-the-clock' support for computers, printers, and
//               more.
//             </p>
//           </div>

//           <div className="bg-white flex justify-center items-center flex-col rounded-lg shadow-lg p-4 transform transition duration-300 hover:scale-105">
//             <VerifiedUserIcon sx={{ fontSize: '4rem', color: '#0f766e' }} />
//             <p className="text-center mt-2 text-lg font-bold text-teal-600">
//               Premium Password Manager
//             </p>
//             <p className="text-center text-teal-600">
//               Manage passwords securely, effortlessly, and across all devices
//               with Dashlane.
//             </p>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default Facilities;

import { useState, useEffect } from 'react';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChatIcon from '@mui/icons-material/Chat';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import ConvenienceIcon from '@mui/icons-material/FlashOn';
import ReliabilityIcon from '@mui/icons-material/VerifiedUser';
import PeaceOfMindIcon from '@mui/icons-material/Spa';

const Facilities = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const items = [
    { 
      name: 'Safety & Security', 
      icon: <SecurityIcon sx={{ fontSize: '1.8rem', color: '#0d9488' }} />,
      description: 'Your devices and data protected with enterprise-grade security'
    },
    { 
      name: 'Convenience', 
      icon: <ConvenienceIcon sx={{ fontSize: '1.8rem', color: '#0d9488' }} />,
      description: 'Get help whenever you need it without appointments'
    },
    { 
      name: 'Unlimited Support', 
      icon: <ChatIcon sx={{ fontSize: '1.8rem', color: '#0d9488' }} />,
      description: 'Priority assistance for all your tech needs'
    },
    { 
      name: 'Reliability', 
      icon: <ReliabilityIcon sx={{ fontSize: '1.8rem', color: '#0d9488' }} />,
      description: 'Consistent, dependable service you can count on'
    },
    { 
      name: 'Peace of mind', 
      icon: <PeaceOfMindIcon sx={{ fontSize: '1.8rem', color: '#0d9488' }} />,
      description: 'Focus on what matters while we handle your tech issues'
    },
  ];

  const features = [
    {
      icon: <SupportAgentIcon sx={{ fontSize: '4.5rem', color: '#0d9488' }} />,
      title: 'Expert Tech Assistance',
      description: 'Get expert assistance for your devices with flexible, on-demand support.',
      gradient: 'from-teal-500 to-teal-700'
    },
    {
      icon: <ChatIcon sx={{ fontSize: '4rem', color: '#0d9488' }} />,
      title: 'Priority Online Assistance',
      description: 'Fast response times for printers & devices with our service plans.',
      gradient: 'from-teal-600 to-teal-800'
    },
    {
      icon: <VerifiedUserIcon sx={{ fontSize: '4rem', color: '#0d9488' }} />,
      title: 'Premium Security Suite',
      description: 'Manage passwords securely across all devices with enterprise-grade protection.',
      gradient: 'from-teal-700 to-teal-900'
    }
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-50 to-white"></div>
      <div className="absolute top-0 left-0 right-0 h-72 bg-teal-900 opacity-5 -z-10"></div>
      
      {/* Main content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-teal-900 mb-4">
              Everything You Get With Micro Sonic Repair
            </h2>
            <p className="text-xl text-teal-700 max-w-3xl mx-auto">
              Comprehensive tech support solutions designed to keep your devices running smoothly
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 text-white transform transition-all duration-500 hover:-translate-y-2 shadow-lg`}
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  {feature.title}
                </h3>
                <p className="text-center text-teal-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-teal-900 text-center mb-12">
              Benefits of Choosing Our Service
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {items.map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 bg-teal-50 rounded-xl transition-all duration-300 hover:bg-teal-100 hover:shadow-md"
                >
                  <div className="mb-4 bg-white p-3 rounded-full shadow-sm">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-teal-900 mb-2">{item.name}</h4>
                  <p className="text-sm text-teal-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-20 bg-teal-900 rounded-3xl p-10 text-white text-center">
            <h3 className="text-3xl font-bold mb-10">Why Customers Love Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <p className="text-teal-200">Customer Satisfaction Rate</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <p className="text-teal-200">Issues Resolved</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">5 min</div>
                <p className="text-teal-200">Average Response Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Facilities;