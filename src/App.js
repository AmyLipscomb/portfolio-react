import './App.css';
import React from "react";
// import { HashRouter } from "react-router-dom";


// Importing components
import Bio from './components/Bio';
import Footer from './components/Footer';
import Header from './components/Header';
import MainPage from './components/MainPage';
// import Navigation from './components/Navigation'; //not sure where to put the navigation in the code
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage/>
      <Bio/>
      <Project />
      <Footer />


    </div>
  );
}

export default App;







