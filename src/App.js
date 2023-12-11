import React from 'react';
import './output.css';
import './index.css';
import '../src/scss/App.scss';
import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';


function App() {
  return (
  
    <div className="App">
      <div className='content-wrapper'>
      <Header />
      <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
