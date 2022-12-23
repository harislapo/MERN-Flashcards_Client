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
    const response = await fetch('http://localhost:5000/decks', {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const newDeck = await response.json();
    setDecks([...decks, newDeck]);
    setTitle('');
  };

  const handleDeleteDeck = async (deckId: string) => {
    await fetch(`http://localhost:5000/decks/${deckId}`, {
      method: 'DELETE',
    });
    // update UI
    setDecks(decks.filter((deck) => deck._id !== deckId));
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
          return (
            <li key={deck._id}>
              <button onClick={() => handleDeleteDeck(deck._id)}>X</button>
              {deck.title}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
