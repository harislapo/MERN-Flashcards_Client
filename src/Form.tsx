import React, { useState } from 'react';
import Input from './Utils/Input';
import { addDeck } from './api/api';

import './Form.css';

const Form = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');

  const handleAddDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(title);
    const newDeck = await addDeck(title);
    // setDecks([...decks, newDeck]);
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleAddDeck} className="main-form">
        <div>
          <button
            className="action-btn"
            onClick={() => setShowInput(!showInput)}
            type="button"
          >
            Add new?
          </button>
        </div>
        <br />
        {showInput && (
          <Input
            value={title}
            type="text"
            placeholder="Enter a flashcard name..."
            setter={setTitle}
          />
        )}
        {/* <button>Add</button> */}
      </form>
    </>
  );
};

export default Form;
