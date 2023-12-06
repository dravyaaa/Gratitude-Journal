import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaCalendarAlt, FaImage } from 'react-icons/fa'; // Import icons

const Category = ({ title, description, route, icon }) => {
  const categoryStyles = {
    margin: '20px',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    background: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '280px', // Set a fixed height for consistency
  };

  const hoverStyles = {
    scale: 1.05,
  };

  return (
    <Link to={route} style={{ textDecoration: 'none', color: 'inherit', flex: '1 1 300px' }}>
      <motion.div
        style={{
          ...categoryStyles,
          width: '300px', // Set a fixed width to maintain consistency
        }}
        whileHover={hoverStyles}
      >
        <div style={{ flex: 1 }}>{icon}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            background: '#f64f59',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Explore
        </button>
      </motion.div>
    </Link>
  );
};

const Home = () => {
  const categories = [
    {
      title: 'Make a New Journal Entry',
      description: 'Start a new entry to express your thoughts and gratitude.',
      route: '/entries',
      icon: <FaPencilAlt size={64} />,
    },
    {
      title: 'Personalized Prompts',
      description: 'Explore personalized prompts to guide your gratitude journaling.',
      route: '/personalized-prompts',
      icon: <FaCalendarAlt size={64} />,
    },
    {
      title: 'Upload Images',
      description: 'Upload images to include in your journal entries.',
      route: '/upload-images',
      icon: <FaImage size={64} />, // Assuming FaImage is your icon for image upload
    },
    // Add more categories as needed
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{
        background: 'linear-gradient(135deg, #4169E1, #87CEEB, #ffffff, #FFE4E1)',
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ color: '#000000', fontSize: '3em', marginBottom: '20px' }}>Welcome to Gratitude Journal!</h1>
      <p style={{ color: '#4169E1', fontSize: '1.2em', maxWidth: '600px' }}>
        This is a Safe Space. Share your gratitude and positive experiences here.
      </p>

      {/* Display categories as visually appealing cards */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          margin: '0 auto', // Centering categories
          maxWidth: '800px', // Limit the maximum width of categories
        }}
      >
        {categories.map((category, index) => (
          <Category key={index} {...category} />
        ))}
      </div>

      {/* Display interactive accordion elements */}
      {/* Accordion components go here */}
    </motion.div>
  );
};

export default Home;