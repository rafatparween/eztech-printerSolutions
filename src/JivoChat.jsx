"use client"
import { useEffect } from 'react';

const JivoChat = () => {
  useEffect(() => {
    const loadJivoChatScript = () => {
      const script = document.createElement('script');
      script.src = "//code.jivosite.com/widget/kd9uAKn19v";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        if (window.JivoChat) {
          window.JivoChat.on('onMessage', (message) => {
            console.log('New message received:', message);
          });
          window.JivoChat.setSettings({
            soundEnabled: true
          });
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    };

    loadJivoChatScript();
  }, []);

  // return (
  //   <div className="fixed bottom-5 right-5 bg-[#0F766E] p-4 rounded-lg shadow-lg">
  //     <p className="text-white">Live Chat Support</p>
  //   </div>
  // );
};

export default JivoChat;
