import Navbar from './Navbar';
import Form from './Form';
import DeckGrid from './DeckGrid';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="heading-flex">
          <h1>Flashcards</h1>
          <Form />
        </div>
        <DeckGrid />
      </div>
    </>
  );
}

export default App;
