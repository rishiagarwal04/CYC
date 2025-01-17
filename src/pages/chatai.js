

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

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
    setError('');
  };

  const aiRun = async () => {
    if (!search.trim()) {
      setError('Please enter a valid input.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const prompt = `" answer assuming you are career counselor the user is gen z and student "${search}"`;
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      aiRun();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div className="chat-container" style={styles.container}>
        <h1 style={{ textAlign: 'center', color: '#007bff' }}>Generative AI Chat App</h1>
        <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Built with ❤️ using ReactJS + Google Gemini</p>

        <div className="chat-display" style={styles.chatDisplay}>
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: chat.user ? 'flex-end' : 'flex-start',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  ...styles.message,
                  backgroundColor: chat.user ? '#007bff' : '#e6e6e6',
                  color: chat.user ? '#fff' : '#000',
                  alignSelf: chat.user ? 'flex-end' : 'flex-start',
                }}
              >
                <p style={{ margin: 0 }}>
                  {chat.user ? chat.user : chat.bot}
                </p>
              </div>
            </div>
          ))}
          {loading && <p style={styles.loadingMessage}>Loading...</p>}
        </div>

        <div className="chat-input" style={styles.inputContainer}>
          <input
            type="text"
            placeholder="Ask me anything..."
            value={search}
            onChange={handleChangeSearch}
            onKeyDown={handleKeyPress}
            style={styles.input}
          />
          <button
            onClick={aiRun}
            style={styles.sendButton}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Send'}
          </button>
        </div>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '600px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  },
  chatDisplay: {
    flex: 1,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '10px',
  },
  message: {
    padding: '10px',
    borderRadius: '12px',
    maxWidth: '60%',
    wordWrap: 'break-word',
  },
  inputContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  sendButton: {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  loadingMessage: {
    textAlign: 'center',
    color: '#007bff',
  },
};

export default Chat;
