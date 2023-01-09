import { API_URL } from './config';

export const addDeck = async (title: string) => {
  const response = await fetch(`${API_URL}/decks`, {
    method: 'POST',
    body: JSON.stringify({
      title,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
