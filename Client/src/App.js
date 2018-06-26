import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Pages/Header';

class App extends Component {
  render() {
    return(
      <Wrapper>
        <Header />
      </Wrapper>
    ) 
  }
}

export default App;
