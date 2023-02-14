import React, { useState } from 'react';
import Input from './Utils/Input';
import { addDeck } from './api/api';
import { useDecksProvider } from './context/context';
import './Form.css';

const Form = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');
  const { decks, setDecks } = useDecksProvider();

  const handleAddDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDeck = await addDeck(title);
    setDecks([...decks, newDeck]);
    setTitle('');
  };

  return (
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
      {showInput && (
        <Input
          value={title}
          type="text"
          placeholder="Enter a flashcard name..."
          setter={setTitle}
        />
      )}
    </form>
  );
};

export default Form;
