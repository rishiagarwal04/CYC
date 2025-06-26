import React, { useState } from 'react';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    careerInterest: '',
    preferredDate: '',
    preferredTime: '',
    additionalQuery: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form Data:', formData);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Book a Career Counsellor</h1>
      {submitted ? (
        <div style={styles.successMessage}>
          <h2>Thank you for contacting us!</h2>
          <p>We will get back to you shortly to schedule your session.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          {[
            { label: 'Full Name:', name: 'name', type: 'text' },
            { label: 'Email Address:', name: 'email', type: 'email' },
            { label: 'Phone Number:', name: 'phone', type: 'tel' },
            { label: 'Preferred Date:', name: 'preferredDate', type: 'date' },
            { label: 'Preferred Time:', name: 'preferredTime', type: 'time' },
          ].map(({ label, name, type }) => (
            <label key={name} style={styles.label}>
              {label}
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </label>
          ))}
          <label style={styles.label}>
            Career Interest:
            <select
              name="careerInterest"
              value={formData.careerInterest}
              onChange={handleChange}
              required
              style={styles.input}
            >
              <option value="">Select your interest</option>
              {['Engineering', 'Medical', 'Arts & Humanities', 'Business & Management', 'Pure Science', 'Others'].map((opt) => (
                <option key={opt} value={opt.toLowerCase()}>{opt}</option>
              ))}
            </select>
          </label>
          <label style={styles.label}>
            Additional Queries:
            <textarea
              name="additionalQuery"
              value={formData.additionalQuery}
              onChange={handleChange}
              rows="4"
              style={styles.textarea}
            />
          </label>
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      )}
    </div>
  );
};
const styles = {
  container: { 
    maxWidth: '500px', 
    margin: '80px auto 0', // 80px from the top
    padding: '20px', 
    fontFamily: 'Arial', 
    backgroundColor: '#f8f9fa', 
    borderRadius: '8px', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
  },
  heading: { textAlign: 'center', color: '#343a40' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  label: { fontWeight: 'bold', color: '#495057' },
  input: { padding: '10px', border: '1px solid #ced4da', borderRadius: '4px', width: '100%' },
  textarea: { padding: '10px', border: '1px solid #ced4da', borderRadius: '4px', width: '100%' },
  button: { padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' },
  successMessage: { textAlign: 'center', color: '#28a745' },
};


export default ContactUsForm;
