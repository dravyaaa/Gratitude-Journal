import React from 'react';

const UserResponsesDisplay = ({ userResponses }) => {
  return (
    <div>
      {userResponses.map((categoryResponses, categoryIndex) => (
        <div key={categoryIndex}>
          <h3>Category {categoryIndex + 1}:</h3>
          <ul>
            {categoryResponses.map((response, responseIndex) => (
              <li key={responseIndex}>{response}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserResponsesDisplay;