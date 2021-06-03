import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import axios from 'axios';

async function loginUser(credentials) {
  const requestOptions = {
    method: 'GET',
     headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://sambathqcrm.000webhostapp.com',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
      'Access-Control-Max-Age': '86400',
      'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI3MzZjNDdlMTc3MGE2ZjllMDRiZDdmYTk2NzYyMjciLCJpYXQiOjE2MjI2MTA3MDEsImV4cCI6MTYyMjg2OTkwMX0.QOTzByBhRf58ayujgIMrpjXF4vHvaGOVG7rLkfGYrGc'
      }
  };
  
  
   return fetch('http://127.0.0.1:8000/api/detail', requestOptions)
     .then(response => response.json()  );
     
   

}

const Home = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [data, setData] = useState("No Data exist");
  let menuItems = [];
  const handleSubmit = async e => {
    e.preventDefault();
    var token = await loginUser({
      email,
      password
    });
  //  setData(token['tasks']);
    token = token['tasks'];
    for (var i = 0; i < token.length; i++) {
      menuItems.push(<div key={i}>  {token[i]['name']} </div>);
     } 

     setData(menuItems);

  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
           {data}
        </div>
      </form>
    </div>
  )
}

export default Home;