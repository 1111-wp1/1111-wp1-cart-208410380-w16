import React, { useState, useReducer } from "react";
import T6_xx_Modal from "./T6_xx_Modal";
import { data } from "../../data";
import { reducer_80 } from "./T6_80_reducer";
// reducer function
const defaultState = {
  people: data,
  isModalOpen: false,
  modelContent: '',
};

const T6_80_useReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer_80, defaultState);

  // const [people, setPeople] = useState(data);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      // setPeople([...people, newItem]);
      // setIsModalOpen(true);
      // setModalContent('item added');
      setName("");
    } else {
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
    // setIsModalOpen(false);
  };
  return (
    <>
      {state.isModalOpen && (
        <T6_xx_Modal
          modalContent={state.modalContent}
          closeModal={closeModal}
        />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button>remove</button>
          </div>
        );
      })}
    </>
  );
};
export default T6_80_useReducer;
