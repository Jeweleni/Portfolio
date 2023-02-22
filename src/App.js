import React from 'react';

import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Contacts from './Components/Contacts/Contacts';
import Footer from "./Components/Footer/Footer"
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Services/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
