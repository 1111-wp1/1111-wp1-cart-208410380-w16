import React, { useState, useContext, useReducer, useEffect, } from "react";
import data from "./components/blogData_80";
import Reducer_80 from "./Reducer_80";

const BlogContext_80 = React.createContext();

const initialState = {
  loading: true,
  blogs: data,
  alert: {
    show: false,
     msg: "", 
     type: ""
  }
}

const BlogContextProvider_80 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_80, initialState);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL'});
  }, [state.blogs]);

  const showAlert = (show = false, msg = "", type = "") => {
    dispatch ({ type:'SHOW_ALERT' , payload: { show: true, msg, type }});
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM' , payload: id});
  }

  return (
    <BlogContext_80.Provider
      value={{ ...state,showAlert,removeItem}} >
      {children}
    </BlogContext_80.Provider>
  );
};


const useBlogContext_80 = () => {
  return useContext(BlogContext_80);
}

export {BlogContextProvider_80, useBlogContext_80};
