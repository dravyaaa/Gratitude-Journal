import React, { useState, useEffect } from 'react';
import AddEntryButton from './AddEntryButton';


const Entries = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  // Load entries from localStorage on component mount
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setJournalEntries(storedEntries);
  }, []);

  const addEntry = (newEntry) => {
    const updatedEntries = [...journalEntries, newEntry];
    setJournalEntries(updatedEntries);

    // Save entries to localStorage
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));

    setShowModal(false);
  };

  const deleteEntry = (index) => {
    const updatedEntries = [...journalEntries];
    updatedEntries.splice(index, 1);
    setJournalEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  };



  const voiceToText = () => {
    let recognition = null;

    if ('SpeechRecognition' in window) {
      recognition = new window.SpeechRecognition();
    } else if ('webkitSpeechRecognition' in window) {
      recognition = new window.webkitSpeechRecognition();
    }

    if (recognition) {
      recognition.continuous = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecognizedText(transcript);
        addEntry(transcript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
      };

      recognition.start();
    }
  };

  return (
    <div>
      <h2>Your Journal Entries</h2>
      <AddEntryButton
        handleAddEntry={addEntry}
        showModal={showModal}
        setShowModal={setShowModal}
        voiceToText={voiceToText}
        setRecognizedText={setRecognizedText} // Pass setRecognizedText function as a prop
      />

      {journalEntries.length > 0 ? (
        <ul>
          {journalEntries.map((entry, index) => (
            <li key={index}>
              {entry}
              <button onClick={() => deleteEntry(index)}>Delete</button>
              {index === journalEntries.length - 1 && recognizedText && (
                <span> - Recognized Text: {recognizedText}</span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No entries yet. Start adding!</p>
      )}
    </div>
  );
};

export default Entries;