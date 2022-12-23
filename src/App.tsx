import React, { useEffect, useState } from 'react';
import './App.css';

type TDeck = {
  _id: string;
  title: string;
};

function App() {
  const [title, setTitle] = useState('');
  const [decks, setDecks] = useState<TDeck[]>([]);

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

  useEffect(() => {
    const fetchDecks = async () => {
      const response = await fetch('http://localhost:5000/decks');
      const data = await response.json();
      setDecks(data);
    };
    fetchDecks();
  }, []);

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
      <div className="decks">
        {decks.map((deck) => {
          return <li key={deck._id}>{deck.title}</li>;
        })}
      </div>
    </div>
  );
}

export default App;
