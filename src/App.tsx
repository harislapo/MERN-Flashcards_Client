import Navbar from './Navbar';
import Form from './Form';
import DeckGrid from './DeckGrid';
import DecksProvider from './context/context';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <DecksProvider>
        <div className="wrapper">
          <div className="heading-flex">
            <h1>Flashcards</h1>
            <Form />
          </div>
          <DeckGrid />
        </div>
      </DecksProvider>
    </>
  );
}

export default App;
