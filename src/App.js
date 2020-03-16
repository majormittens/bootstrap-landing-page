import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MidSection from './components/MidSection';
import Form from './components/Form';
import Bottom from './components/Bottom';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <div className="bg-mobile">
        <Logo/>
        <Navbar/>
        <Header/>
        <MidSection/>
        <Form/>
        <Bottom/>
        <Footer/>
      </div>
    </React.Fragment>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
