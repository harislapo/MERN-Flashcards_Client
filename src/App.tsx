import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');

  const handleAddDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:5000/decks', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setTitle('');
  };

  return (
    <div className="App">
      <form onSubmit={handleAddDeck}>
        <label htmlFor="deck-title">Title</label>
        <input
          type="text"
          id="deck-title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
