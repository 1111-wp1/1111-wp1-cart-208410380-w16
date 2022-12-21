import React, { useState } from 'react';

const T14_80_UseStateObject = () => {
  const [person ,setPerson] = useState({
    name: 'justin',
    age: 25,
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({...person, message: 'justin Chu, 208410380'});
  }

  return <> 
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <div className="btn" onClick={changeMessage}>change message</div>
  </>;
};

export default T14_80_UseStateObject;
