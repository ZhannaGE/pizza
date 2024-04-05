 import calcTotalPrice from "./calcTotalPrice";

const getCartFromLS = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) : [];

    const totalPrice = calcTotalPrice(items);

    return {
        items,
        totalPrice,
    };
};

export default getCartFromLS;