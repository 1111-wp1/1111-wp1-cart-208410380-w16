import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_80 from './Reducer_80';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext_80 = React.createContext();

const initialState = {
  loading: true,
  cart: [],
  amount: 4,
  total: 999.9
}

const AppProvider_80 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_80, initialState);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL'});
  }, [state.cart]);

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id})
  }

  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id})
  }

  const removeCart = (id) => {
    dispatch({ type: 'REMOVE_CART', payload: id});
  }
  // 1221 fetch API //
  const fetchData = async () => {
    dispatch({ type: 'LOADING'});
    const response = await fetch(url);
    const cart = await response.json();
    console.log('cart', cart);
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart})
  }

  useEffect(() => {
    fetchData();
  }, []);
  //
  return <AppContext_80.Provider value={{...state,clearCart,increase,decrease,removeCart}}>
      {children}
  </AppContext_80.Provider>
};

const useGlobalContext_80 = () => {
  return useContext(AppContext_80);
}

export { AppProvider_80, useGlobalContext_80};
