import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Navbar from '../components/navbar';

// Initialize Google Generative AI instance
const genAI = new GoogleGenerativeAI('AIzaSyCImF5g7Uu6IqyeOuumQvTdID0pNvLINQ8');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });


const ChatApp = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
    setError('');
  };
  const cleanResponse = (response) => {
    // Remove any leading/trailing whitespace and unwanted symbols
    return response.replace(/^[*•\-]\s+/gm, '').trim();
  };
  // Call the generative AI API
  const sendMessage = async () => {
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const prompt = `Assume you are a career councellor and user is student "${message}" `;
      const result = await model.generateContent(prompt);
      const response = await result.response.text();
      const cleanText = cleanResponse(response);
      console.log('AI Response:', cleanText);


      // Add to chat history
      setChatHistory((prev) => [...prev, { user: message, bot: cleanText }]);
      setMessage('');
    } catch (err) {
      console.error(err);
      setError('Failed to fetch response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger AI call on Enter key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (<><Navbar />
    <div style={styles.container} className='mt-20 h-full' >
      <div style={styles.chatHeader}>Welcome to personalised Career Counselling</div>

      <div style={styles.chatBody}>
        <div style={styles.botMessage}>
          <p style={styles.messageText}><>👋 Hello, and welcome to CareerClips – your Personal Career Counselor! 🎯
I'm here to help you explore, plan, and navigate your career journey. Whether you're:

🌱 Just starting out,
📈 Looking to grow, or
🔄 Seeking a career shift,
I've got tailored advice, resources, and insights for you.

👉 How can I assist you today?
1️⃣ Explore new career paths
2️⃣ Build a standout resume
3️⃣ Prepare for interviews
4️⃣ Gain skills for your dream job

Let’s get started on unlocking your potential! 🚀</></p>
        </div>
        {chatHistory.map((chat, index) => (
          <React.Fragment key={`chat-${index}`}>
            <div style={styles.userMessage}>
              <p style={styles.messageText}>{chat.user}</p>
            </div>
            <div style={styles.botMessage}>
              <p style={styles.messageText}>{chat.bot}</p>
            </div>
          </React.Fragment>
        ))}
        {loading && <div style={styles.loading}>AI is typing...</div>}
      </div>

      <div style={styles.chatFooter}>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={handleChangeMessage}
          onKeyDown={handleKeyPress}
          style={styles.inputField}
        />
        <button onClick={sendMessage} style={styles.sendButton} disabled={loading}>
          {loading ? '...' : 'Send'}
        </button>
      </div>

      {error && <p style={styles.error}>{error}</p>}
    </div></>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '89vh',
    top: '100px',
    backgroundColor: '#e5ddd5',
    fontFamily: 'Arial, sans-serif',
  },
  chatHeader: {
    padding: '10px',
    backgroundColor: '#4e03fc',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chatBody: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '60%',
    wordBreak: 'break-word',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    padding: '10px',
    borderRadius: '10px',
    maxWidth: '60%',
    wordBreak: 'break-word',
  },
  messageText: {
    margin: 0,
  },
  loading: {
    alignSelf: 'center',
    color: '##4e03fc',
  },
  chatFooter: {
    display: 'flex',
    padding: '10px',
    backgroundColor: '#f0f0f0',
  },
  inputField: {
    flex: 1,
    padding: '10px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px 20px',
    backgroundColor: '#4e03fc',
    color: 'white',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
};

export default ChatApp;
