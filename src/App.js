import { useState } from "react";
import CardForm from './components/CardForm';
import CardTable from './components/CardTable';
import { addCard, getAllCards } from './service/cardService.js';
import './App.css';

function App() {
  const [card, setCard] = useState({
    customerName: "",
    cardNumber: "",
    limit: '',
  });
  const [cards, setCards] = useState([]);
  const [addCardresponse, setAddCardResponse] = useState('')
  const [showCardsresponse, setShowCardsResponse] = useState('')
  const handleChange = (event) => {
    setCard({ ...card, [event.target.name]: event.target.value });
  };

  const handleAddCard = async (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    const response = await addCard(card)
    setAddCardResponse(response?.message)
    setCard({ customerName: "", cardNumber: "", limit: 0 });
    console.log(cards, cards.length, 'cards');
    cards.length > 0 && setCards(await getAllCards())

  };
  const handleShowCards = async (event) => {
    event.preventDefault();
    const cards = await getAllCards()
    setShowCardsResponse(cards?.message)
    setCards(cards)
  }
  return (
    <div className="App">
      <h1>Credit Card Application</h1>
      <CardForm card={card} handleChange={handleChange} handleSubmit={handleAddCard} response={addCardresponse} />
      <CardTable cards={cards} handleShowCards={handleShowCards} response={showCardsresponse} setCards={setCards} />
    </div>
  );
}

export default App;
