import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserResponsesDisplay from './Components/UserResponsesDisplay';
import backgroundImage from './Components/backg.jpg';
import Header from './Components/Header';
import Home from './Components/Home';
import Entries from './Components/Entries';
import PersonalizedPrompts from './Components/PersonalizedPrompts';

const App = () => {
  const [userResponses, setUserResponses] = useState([]); // State to store user responses

  const gradientStyle = {
    background: 'linear-gradient(120deg, #a1c4fd, #c2e9fb, #f64f59)',
    minHeight: '100vh',
    position: 'relative',
  };

  return (
    <Router>
      <div style={gradientStyle}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/entries" element={<Entries />} />
          {/* Pass userResponses and setUserResponses as props to PersonalizedPrompts */}
          <Route
            exact
            path="/personalized-prompts"
            element={<PersonalizedPrompts userResponses={userResponses} setUserResponses={setUserResponses} />}
          />
          {/* Display user responses in UserResponsesDisplay */}
          <Route exact path="/user-responses" element={<UserResponsesDisplay userResponses={userResponses} />} />
          
          {/* Add more routes for other components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;