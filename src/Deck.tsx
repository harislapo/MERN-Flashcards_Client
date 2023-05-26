import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addCard, getDeck, TDeck } from './api/api';
import FlipCard from './Utils/FlipCard';
import Navbar from './Navbar';
import Input from './Utils/Input';
import './Deck.css';

const Deck = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [cards, setCards] = useState<string[]>([]);
  const [deck, setDeck] = useState<TDeck | undefined>();

  const { deckId } = useParams();

  const handleAddCard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!deckId) return;

    // Get response from api so we can update the UI accordingly.
    const response = await addCard(deckId, question, answer);

    // Pull cards property from response and rename it to avoid name clashing with state property.
    const { cards: fetchedCards } = response;

    // Update UI.
    setCards(fetchedCards);
    setQuestion('');
    setAnswer('');
  };

  // Since this app doesn't have authentication or authorization,
  // deleting of anything will be disabled by default.

  // const handleDeleteCard = async (index: number) => {
  //   if (!deckId) return;
  //   const newDeck = await deleteCard(deckId, index);
  //   // update UI
  //   setCards(newDeck.cards);
  // };

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
      <div className="heading-flex">
        <h1>{deck?.title}</h1>
        <form onSubmit={handleAddCard}>
          <div className="input_parent">
            <Input
              type="text"
              placeholder="Enter question.."
              value={question}
              setter={setQuestion}
            ></Input>
          </div>
          <div className="input_parent">
            <Input
              type="text"
              placeholder="Enter answer.."
              value={answer}
              setter={setAnswer}
            ></Input>
          </div>
          <button style={{ visibility: 'hidden' }}>Add</button>
        </form>
      </div>
      <div className="cards_container">
        <div className="cards-grid">
          {cards.map((card, index) => (
            <FlipCard card={card} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Deck;
