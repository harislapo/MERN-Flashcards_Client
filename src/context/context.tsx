import React, { useState, PropsWithChildren } from 'react';
import { TDeck } from '../api/api';

type DecksType = {
  decks: TDeck[];
  setDecks: React.Dispatch<React.SetStateAction<TDeck[]>>;
  children?: React.ReactNode;
};

const Context = React.createContext<DecksType>({} as DecksType);

const DecksProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [decks, setDecks] = useState<TDeck[]>([]);

  return (
    <Context.Provider value={{ decks, setDecks }}>{children}</Context.Provider>
  );
};

export default DecksProvider;

export const useDecksProvider = () => React.useContext(Context);
