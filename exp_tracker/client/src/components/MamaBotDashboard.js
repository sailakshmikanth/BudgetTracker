import React, { useEffect, useState } from 'react';
import './mama.css'; // Ensure you have a corresponding CSS file for styles

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true

  const loadChatbotScript = () => {
    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "ebu6PjMzXNeyHZ4l1vgTG",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(configScript);

    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    script.setAttribute('chatbotId', "ebu6PjMzXNeyHZ4l1vgTG");
    script.setAttribute('domain', "www.chatbase.co");
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadChatbotScript();
  }, []); // Run script on component mount

  return (
    <div id="chatbot" className="chatbot-container"> {/* Added container div */}
      {/* You can also add any other UI elements or buttons to toggle the chatbot */}
    </div>
  );
};

export default Chatbot;
