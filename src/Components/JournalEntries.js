import React from 'react';
import { Card } from 'react-bootstrap';

const JournalEntries = () => {
  // Simulated data for entries (to be replaced with dynamic data)
  const entries = [
    { id: 1, text: 'Today, I am grateful for...' },
    { id: 2, text: 'Grateful for spending time with family.' },
    // Add more simulated entries as needed
  ];

  return (
    <div>
      <h2>My Gratitude Entries</h2>
      {entries.map(entry => (
        <Card key={entry.id} className="mb-3">
          <Card.Body>{entry.text}</Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default JournalEntries;
