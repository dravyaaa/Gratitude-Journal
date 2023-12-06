import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import backgroundImage from './backg.jpg';

const PersonalizedPrompts = ({ userResponses, setUserResponses }) => {
  const navigate = useNavigate();

  const categories = [
    {
      title: 'Memory Lane',
      prompts: ['Share a cherished memory from your childhood'],
    },
    {
      title: 'Everyday Blessings',
      prompts: ['What small thing today brought a smile to your face?'],
    },
    {
      title: 'Wisdom & Reflection',
      prompts: ["Share a piece of advice or life lesson you've learned over the years."],
    },
    {
      title: 'Family & Friends',
      prompts: ["Recall a special family tradition that brings you joy."],
    },
    {
      title: 'Simple Pleasures',
      prompts: ["What's something in nature that always makes you feel grateful?"],
    },
    {
      title: 'Health & Wellness',
      prompts: ["What's something about your health that you're thankful for?"],
    }
    // Your categories
  ];

  const handleInput = (categoryIndex, promptIndex, userInput) => {
    const updatedResponses = userResponses ? [...userResponses] : [];
  
    if (!updatedResponses[categoryIndex]) {
      updatedResponses[categoryIndex] = [];
    }
  
    if (!updatedResponses[categoryIndex][promptIndex]) {
      updatedResponses[categoryIndex][promptIndex] = userInput;
    } else {
      updatedResponses[categoryIndex][promptIndex] = userInput;
    }
  
    setUserResponses(updatedResponses.filter(Boolean)); // Remove undefined entries

    // Save userResponses to local storage
    localStorage.setItem('userResponses', JSON.stringify(updatedResponses));
  };
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/user-responses');
  };

  useEffect(() => {
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        background: 'linear-gradient(to right, #3498db, #a9cce3)'}}
    >
      <div style={{ width: '70%' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              style={{
                width: '30%',
                height: '300px', // Set a fixed height for uniformity
                marginBottom: '40px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
                color: 'white',
              }}
            >
              <h3 style={{ marginBottom: '10px' }}>{category.title}</h3>
              <ul>
                {category.prompts.map((prompt, promptIndex) => (
                  <li key={promptIndex} style={{ marginBottom: '10px' }}>
                    <div style={{ marginBottom: '5px', color: 'black' }}>{prompt}</div>
                    <input
                      type="text"
                      placeholder="Enter your response..."
                      onChange={(e) => handleInput(categoryIndex, promptIndex, e.target.value)} // Change here
                      value={(userResponses[categoryIndex] && userResponses[categoryIndex][promptIndex]) || ''}
                      style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #777' }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <form onSubmit={handleSubmit}>
          <button
              type="button"
              onClick={() => navigate('/user-responses')}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: 'green',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                marginRight: '10px', // Add margin to separate buttons
              }}
            >
              View Entries
            </button>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: 'blue',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
              }}
            >
              Submit
            </button>
          </form>
        </div>
        <Link to="/" style={{ color: 'black', textAlign: 'right', display: 'block', marginTop: '10px' }}>
          Go back to Home
        </Link>
      </div>
    </motion.div>
  );
};  
export default PersonalizedPrompts;