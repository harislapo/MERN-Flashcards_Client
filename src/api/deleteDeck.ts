import { API_URL } from "./config";

export const deleteDeck = async (deckId: string) => {
  await fetch(`${API_URL}/decks/${deckId}`, {
    method: 'DELETE',
  });
};
