const Reducer_80 = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [], amount: 0, total: 0 }
    }

    if (action.type === 'INCREASE') {
        let tempCart = state.cart.map( (cartItem)=> {
            if(cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1};
            }
            return cartItem;
        });
        return {...state, cart: tempCart}
    }

    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map( (cartItem)=> {
            if(cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount - 1};
            }
            return cartItem;
        });
        return {...state, cart: tempCart}
    }

    if (action.type === 'GET_TOTAL') {
        let {total, amount} = state.cart.reduce((cartTotal, cartItem)=> {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        }, {
            total: 0,
            amount: 0
        });

        total = parseFloat(total.toFixed(2));

        return { ...state, total, amount}
    }

    if (action.type === 'REMOVE_CART') {
        
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true}
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return {...state, cart: action.payload, loading: false}
    }
}

export default Reducer_80;
