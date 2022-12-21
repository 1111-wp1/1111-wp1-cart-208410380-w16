import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/justin40715';

const T31_80_MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] =useState(false);
  const [user, setUser] = useState('default user');

  // run once
  useEffect( () => {
    fetch(url)
    .then( (response) => {
      if( response.status >= 200 && response.status <= 299 ) {
        return response.json();
      }
  })
    .then( (user) => {
      console.log('user', user.login);
      setUser(user.login);
      setIsLoading(false);
    })
    .catch( (error) => {
      console.log(error);
      setIsError(true);
    })

  }, []);

  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if(isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    )
  }

  return <h2>{user}</h2>;
};

export default T31_80_MultipleReturns;
