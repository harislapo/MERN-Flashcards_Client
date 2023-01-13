import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Deck from './Deck';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Header from './Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/decks/:deckId',
    element: <Deck />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="container">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
