import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const T21_80_UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  // by default runs after every re-render
  useEffect( () => {
    console.log('value', value);
  });
  // run once
  useEffect( () => {
    console.log('loading...');
  }, []);

  // run when value2 changes
  useEffect( () => {
    console.log('value2', value2);
    if(value2 > 0) {
      document.title = `New Message(${value2})`
    }
  }, [value2]);

  return <>
    <h1>{value}</h1>
    <button className='btn' onClick={ () => setValue(value + 1)}>Value+1</button>
    <h1>{value2}</h1>
    <button className='btn' onClick={ () => setValue2 (value2 + 1)}>Value2+1</button>
  
  </>
};

export default T21_80_UseEffectBasics;
