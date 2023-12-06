import React, { useState, useEffect } from 'react';
import AddEntryButton from './AddEntryButton';

const Entries = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEntryIndex, setSelectedEntryIndex] = useState(null);

  // Load entries from localStorage on component mount
  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem('journalEntries')) || [];
    setJournalEntries(storedEntries);
  }, []);

  const addEntry = (newEntry) => {
  if (selectedEntryIndex !== null) {
    // If selectedEntryIndex is not null, update existing entry
    const updatedEntries = [...journalEntries];
    updatedEntries[selectedEntryIndex] = newEntry;
    setJournalEntries(updatedEntries);
    setSelectedEntryIndex(null);
  } else {
    // Otherwise, add a new entry
    const updatedEntries = [...journalEntries, newEntry];
    setJournalEntries(updatedEntries);
  }

  // Save entries to localStorage
  localStorage.setItem('journalEntries', JSON.stringify(journalEntries));

  setShowModal(false);
};

  const deleteEntry = (index) => {
    const updatedEntries = [...journalEntries];
    updatedEntries.splice(index, 1);
    setJournalEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  };

  const updateEntry = (index) => {
    // Set the selected entry index and open the modal with existing entry content
    setSelectedEntryIndex(index);
    setShowModal(true);
  };
  
  const voiceToText = () => {
    let recognition = null;
  
    const handleRecognition = (event) => {
      const transcript = event.results[0][0].transcript;
      addEntry(transcript);
    };
  
    const handleError = (event) => {
      console.error('Speech recognition error:', event.error);
    };
  
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.continuous = false;
      recognition.lang = 'en-US';
      recognition.onresult = handleRecognition;
      recognition.onerror = handleError;
      recognition.start();
    }
  };;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Journal Entries</h2>
      <AddEntryButton
        handleAddEntry={addEntry}
        showModal={showModal}
        setShowModal={setShowModal}
        voiceToText={voiceToText}
      />

      {journalEntries.length > 0 ? (
        <ul className="list-disc pl-4">
          {journalEntries.map((entry, index) => (
            <li key={index} className="mb-2">
              {entry}
              <button onClick={() => updateEntry(index)}>Update</button>
              <button onClick={() => deleteEntry(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4 text-center">No entries yet. Start adding!</p>
      )}
    </div>
  );
};

export default Entries;