import React from 'react';

const ShareApp = () => {
  const appUrl = 'https://pria2601.github.io/career_unicorn/'; 
  const appTitle = 'Check out this amazing app!';
  const appDescription = 'This app is awesome! You should give it a try.';

  // Web Share API handler
  const handleWebShare = () => {
    if (navigator.share) {
      navigator.share({
        title: appTitle,
        text: appDescription,
        url: appUrl,
      })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.error('Something went wrong sharing:', error));
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🌟 Share Our Amazing App Career Unicorn!</h1>
      <p style={styles.description}>
        Help us spread the word about our app. Share it with your friends and family!
      </p>

      {/* Web Share API Button */}
      <button onClick={handleWebShare} style={styles.shareButton}>
        Share via Web Share
      </button>

      <div style={styles.divider}></div>

      {/* Fallback Sharing Links */}
      <div>
        <h2 style={styles.subHeader}>Or Share on:</h2>
        <div style={styles.socialIcons}>
          <a
            href={`https://wa.me/?text=${encodeURIComponent(appTitle + ' ' + appUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(appTitle)}&url=${encodeURIComponent(appUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="Twitter" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(appUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.iconLink}
          >
            <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="Facebook" />
          </a>
          <a
            href={`mailto:?subject=${encodeURIComponent(appTitle)}&body=${encodeURIComponent(appDescription + ' ' + appUrl)}`}
            style={styles.iconLink}
          >
            <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: '"Roboto", Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '40px auto',
    textAlign: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '20px',
  },
  shareButton: {
    padding: '12px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  shareButtonHover: {
    backgroundColor: '#0056b3',
  },
  divider: {
    margin: '20px 0',
    borderTop: '1px solid #ddd',
  },
  subHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#555',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  iconLink: {
    display: 'inline-block',
    transition: 'transform 0.3s ease',
  },
  iconLinkHover: {
    transform: 'scale(1.1)',
  },
};

export default ShareApp;
