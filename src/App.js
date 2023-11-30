import React from 'react';
import './index.css';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import CursorCircle from './components/cursor-circle/cursor-circle'; // Import CursorCircle component

import Footer from './components/footer/Footer';
import ContactBanner from './components/contactBanner/ContactBanner';

function App() {
  return (
    <div className="App">
      <CursorCircle />  
      <Header  />
      <Body />
      

      
      <Footer />
      {/* Other components will go here */

      }
    </div>
    
  );
}

export default App;
