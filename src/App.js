import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
// import Header from './components/Header';


const App = props => {
  return (
    <div>
      <Menu />
      <Header />
    </div>
  );
}

export default App;
