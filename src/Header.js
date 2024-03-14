import React from 'react';
import './header.css'; 
import usersData from "./users.json";



function Header() {
  return(
    <>
    
    <div>
        {usersData.map((item) => (
          <div key={item.username}>
            <h1>{item.username}</h1>
            <p>{item.full_name}</p>
            <p>{item.description}</p>
            <p>{item.description}</p>
            <p><a>{item.url}</a></p>



          </div>
        ))}
      </div>

    </>
  )

};


export default Header;



