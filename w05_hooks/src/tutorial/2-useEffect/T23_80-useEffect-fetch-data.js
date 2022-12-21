import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const T23_80_UseEffectFetchData = () => {

const [users, setUsers] = useState([]);

const getUsers = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('data', data);
    setUsers(data);
  } catch(err){
    console.log('error', err);
  }
}

  console.log('users', users);

  // run once
  useEffect( () => {
    getUsers();
  }, []);

  return (
  <>
    <ul className="users">
         { users.map( (user) => {
          const {id, login, avatar_url, html_url} = user;
          return (
          <li key={id}>
            <img src={avatar_url} alt={login}/>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>Profile</a>
            </div>
          </li>
          )
         })}
    </ul>
  </>
  );
};

export default T23_80_UseEffectFetchData;
