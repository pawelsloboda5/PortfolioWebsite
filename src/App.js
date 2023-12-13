import React from 'react';
import './output.css';
import './index.css';
import '../src/css/App.css';


import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


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
