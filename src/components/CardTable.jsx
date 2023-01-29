export default function Table({ cards, handleShowCards, response, setCards }) {
  return (
    <div>
      <br />
      <button onClick={handleShowCards}>Show All Cards saved</button>
      <br />
      <br />
      {cards?.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Card Number</th>
                <th scope="col">Limit</th>
              </tr>
            </thead>
            <tbody>
              {cards.map((card) => (
                <tr key={card.cardNumber}>
                  <td> {card.customerName} </td>
                  <td> {formatCardNumber(card.cardNumber)} </td>
                  <td> {card.limit} </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <button style={{ margin: "auto" }} onClick={() => setCards([])}>
            Hide All Cards
          </button>
          <br />
          <br />
          <hr />
        </>
      )}
      <p style={{ color: "red" }}>{response}</p>
    </div>
  );
}

const formatCardNumber = (cardNumber) => {
  return (
    cardNumber &&
    cardNumber
      .replace(/ /g, "")
      .replace(/-/g, "")
      .replace(/(.{4})/g, "$1 ")
  );
};
