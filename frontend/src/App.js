import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react'





const App=()=>{

  const getData=()=>{
    fetch("http://localhost:3000/here")
    .then(data=>data.json())
    .then(console.log);
    
}
useEffect(()=>{
    getData();
},[])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
