import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // adjust as needed
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-green-700">Thank You!</h1>
      <p className="mb-6 text-center max-w-md">
        Your submission has been received. We appreciate your interest and will get back to you shortly.
      </p>
      <a
        href="https://chat.whatsapp.com/GVRdc2ZvHZ03fpNH7adzmL"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded shadow mb-4"
      >
        Join our WhatsApp Community
      </a>
      <button
        onClick={handleBack}
        className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYouPage;
