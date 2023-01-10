import { API_URL } from './config';
import { TDeck } from './getDecks';

export const addCard = async (deckId: string, text: string): Promise<TDeck> => {
  const response = await fetch(`${API_URL}/decks/${deckId}/cards`, {
    method: 'POST',
    body: JSON.stringify({
      cardText: text,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
