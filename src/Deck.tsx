import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addCard, deleteCard, getDeck, TDeck } from './api/api';
import FlipCard from './Utils/FlipCard';
import Navbar from './Navbar';
import './Deck.css';

const Deck = () => {
  const [text, setText] = useState('');
  const [cards, setCards] = useState<string[]>([]);
  const [deck, setDeck] = useState<TDeck | undefined>();

  const { deckId } = useParams();

  const handleAddCard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deckId) return;

    // Get response from api so we can update the UI accordingly.
    const response = await addCard(deckId, text);

    // Pull cards property from response and rename it to avoid name clashing with state property.
    const { cards: fetchedCards } = response;

    // Update UI.
    setCards(fetchedCards);
    setText('');
  };

  const handleDeleteCard = async (index: number) => {
    if (!deckId) return;
    const newDeck = await deleteCard(deckId, index);
    // update UI
    setCards(newDeck.cards);
  };

  useEffect(() => {
    const fetchDeck = async () => {
      if (!deckId) return;
      const newDeck = await getDeck(deckId);
      setDeck(newDeck);
      setCards(newDeck.cards);
    };
    fetchDeck();
  }, [deckId]);

  return (
    <>
      <Navbar />
      <div className="Deck">
        <h1>{deck?.title}</h1>
        <form onSubmit={handleAddCard}>
          <label htmlFor="card-text">Title</label>
          <input
            type="text"
            id="card-text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setText(e.target.value);
            }}
          />
          <button>Add</button>
        </form>
        <ul className="cards">
          {cards.map((card, index) => (
            <FlipCard card={card} key={index}/>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Deck;
