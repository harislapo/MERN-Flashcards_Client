import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDeck, deleteDeck, getDecks, TDeck } from './api/api';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [decks, setDecks] = useState<TDeck[]>([]);
  const navigate = useNavigate();

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
      <div className="heading-flex">
        <h1>Flashcards</h1>
        <form onSubmit={handleAddDeck}>
          <div style={{ textAlign: 'center' }}>
            <button>Add new?</button>
          </div>
          <br />
          <input
            type="text"
            id="deck-title"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}
            placeholder="..."
          />
          {/* <button>Add</button> */}
        </form>
      </div>
      <div className="deck-grid">
        {decks.map((deck, index) => {
          return (
            <div className="deck" key={deck._id}>
              <div className="deck__content">
                <h2 className="deck__title">{deck.title}</h2>
                <p className="deck__description">
                  Test your {deck.title.split(' ', 1)} knowledge!
                </p>
                <div className="flex-btn">
                  <button
                    type="button"
                    className="fill-btn"
                    onClick={() => navigate(`decks/${deck._id}`)}
                  >
                    Try
                  </button>
                </div>

                <button
                  className="btn__delete"
                  onClick={() => handleDeleteDeck(deck._id)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
