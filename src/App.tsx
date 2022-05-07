import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./containers/Header/Header";
import {Content} from "./containers/Content/Content";

function App() {
  return (
    <div className="App">
      <Header/>
      <Content />
    </div>
  );
}

export default App;
