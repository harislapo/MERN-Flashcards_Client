import { API_URL } from './config';
export type TDeck = {
  _id: string;
  title: string;
};

export const getDecks = async (): Promise<TDeck[]> => {
  const response = await fetch(`${API_URL}/decks`);
  return response.json();
};
