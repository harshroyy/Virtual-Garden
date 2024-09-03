import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios if you haven't


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, sender: 'user' };
    setMessages([...messages, newMessage]);
    setInput('');

    try {
      // Replace with your backend API endpoint for chatbot messages
      const response = await axios.post('http://localhost:1000/api/v1/chatbot', { message: input });
      const botMessage = { text: response.data.reply, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const botMessage = { text: "Sorry, I didn't understand that.", sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your message..."
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </div>
  );
};

export default Chatbot;
