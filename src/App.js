import React from 'react';
import './output.css';
import './index.css';
import './App.scss';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import CursorCircle from './components/cursor-circle/cursor-circle'; 

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
