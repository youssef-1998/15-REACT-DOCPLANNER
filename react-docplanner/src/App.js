import React from 'react';
import './App.css';
import Nav from './nav-bar';
import Entete from './entete';
import Boxs from './boxs';
import Company from './companys';
import Platform from './platform';
import Improve from  './improve' ;
import Footer from './footer';
import Places from './places';
function App() {
  return (

    <div className="App">

      <Nav />
      
      <main>
        <Entete />
        <Boxs />
        <Company />
        <Platform />
        <Improve />
        <Places />
        <Footer />
      </main>

    </div>
    
  );
}

export default App;
