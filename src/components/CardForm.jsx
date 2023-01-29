export default function UserForm({card, handleChange, handleSubmit, response}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Enter the Card Details</h3>
                </div>
                <div>
                    <input
                        type="text"
                        name="customerName"
                        placeholder="Customer Name"
                        value={card.customerName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        value={card.cardNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="limit"
                        placeholder="Limit"
                        value={card.limit}
                        onChange={handleChange}
                    />
                </div>
                <div><br />
                    <button type="submit">Add Card</button>
                    <br />
                    <p style={{ color: 'red' }}>{response}</p>
                    <hr />
                </div>
            </form>
        </div>
    );
}
