import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AddEntryButton = ({ handleAddEntry, showModal, setShowModal, voiceToText }) => {
  const [entryContent, setEntryContent] = useState('');

  const handleCloseModal = () => {
    setShowModal(false);
    setEntryContent(''); // Clear entry content on modal close
  };

  const handleSubmit = () => {
    if (entryContent.trim() !== '') {
      handleAddEntry(entryContent);
      handleCloseModal();
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Add New Entry
      </Button>

      {/* Modal for adding a new entry */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form inputs for adding new entries */}
          <textarea
            rows="4"
            cols="50"
            value={entryContent}
            onChange={(e) => setEntryContent(e.target.value)}
            placeholder="Enter your entry..."
          />
          <Button variant="secondary" onClick={voiceToText}>
            Voice-to-Text
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Entry
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddEntryButton;