import React, { useState, useEffect } from 'react';
import { deleteDeck, getDecks, TDeck } from './api/api';
import { useNavigate } from 'react-router-dom';
import './DeckGrid.css';

const DeckGrid = () => {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const navigate = useNavigate();

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
                  className="action-btn"
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
  );
};

export default DeckGrid;
