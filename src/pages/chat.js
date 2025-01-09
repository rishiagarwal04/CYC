import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Google Generative AI instance
const genAI = new GoogleGenerativeAI('AIzaSyCImF5g7Uu6IqyeOuumQvTdID0pNvLINQ8');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const Chat = () => {
  const [search, setSearch] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    setError('');
  };

  // Call the generative AI API
  const aiRun = async () => {
    if (!search.trim()) {
      setError('Please enter a valid search category.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const prompt = ` "${search}" answer assuming the user is indian`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      // Add to chat history
      setChatHistory((prev) => [
        ...prev,
        { user: search, bot: text },
      ]);
      setSearch('');
    } catch (err) {
      console.error(err);
      setError('Failed to fetch results. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger AI call on Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      aiRun();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Generative AI Restaurant App!</h1>
      <p>Built with ❤️ using ReactJS + Google Gemini</p>

      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search Food with Category using Generative AI"
          value={search}
          onChange={handleChangeSearch}
          onKeyDown={handleKeyPress}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
        <button
          onClick={aiRun}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Send'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ maxHeight: '500px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '4px' }}>
        {chatHistory.map((chat, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <p style={{ fontWeight: 'bold', color: '#007bff' }}>User: {chat.user}</p>
            <p style={{ color: '#555' }}>AI: {chat.bot}</p>
          </div>
        ))}
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Chat;
