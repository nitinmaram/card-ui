import axios from 'axios';

export const addCard = async ({ customerName, cardNumber, limit }) => {
    try {
        const msg = await axios({
            method: 'post',
            url: `http://localhost:3000/addCard`,
            data: {
                customerName,
                cardNumber,
                limit: parseInt(limit)
            }
        });
        return msg?.data;
    } catch (error) {
        console.log(`Error in addCard UI: ${error}`);
        return error;
    }
}
export const getAllCards = async () => {
    console.log('getAllCards', `http://localhost:3000/cards`);
    try {
        const allCards = await axios({
            method: 'get',
            url: `http://localhost:3000/cards`
        });
        return allCards?.data;
    } catch (error) {
        console.log(`Error in  getAllCards UI: ${error}`);
        return error;
    }
}