import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addDeck, deleteDeck, getDecks, TDeck } from './api/api';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [decks, setDecks] = useState<TDeck[]>([]);

  const handleAddDeck = async (e: React.FormEvent) => {
    e.preventDefault();
    const newDeck = await addDeck(title);
    setDecks([...decks, newDeck]);
    setTitle('');
  };

  const handleDeleteDeck = async (deckId: string) => {
    await deleteDeck(deckId);
    // update UI
    setDecks(decks.filter((deck) => deck._id !== deckId));
  };

  useEffect(() => {
    const fetchDecks = async () => {
      const data = await getDecks();
      setDecks(data);
    };
    fetchDecks();
  }, []);

  return (
    <div>
      <h1>Flashcards</h1>
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
      <div className="deck-grid">
        {decks.map((deck, index) => {
          return (
            <div
              className={`deck ${index === 0 ? 'featured' : ''} `}
              key={deck._id}
            >
              <div className="deck__content">
                <h2 className="deck__title">{deck.title}</h2>
                <p className="deck__description">
                  Test your {deck.title.split(' ', 1)} knowledge!
                </p>
                <div className="deck__buttons">
                  <button>Go!</button>
                  <button onClick={() => handleDeleteDeck(deck._id)}>x</button>
                </div>
              </div>

              {/* <Link to={`decks/${deck._id}`}>{deck.title}</Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
