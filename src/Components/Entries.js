import React, { useState } from 'react';
import AddEntryButton from './AddEntryButton';

const Entries = () => {
  const [journalEntries, setJournalEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  const addEntry = (newEntry) => {
    setJournalEntries([...journalEntries, newEntry]);
    setShowModal(false);
  };

  const voiceToText = () => {
    let recognition = null;
  
    const handleRecognition = (event) => {
      const transcript = event.results[0][0].transcript;
      setRecognizedText(transcript);
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
        setRecognizedText={setRecognizedText}
      />

      {journalEntries.length > 0 ? (
        <ul className="list-disc pl-4">
          {journalEntries.map((entry, index) => (
            <li key={index} className="mb-2">
              {entry}
              {index === journalEntries.length - 1 && recognizedText && (
                <span className="text-sm italic ml-2"> - Recognized Text: {recognizedText}</span>
              )}
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