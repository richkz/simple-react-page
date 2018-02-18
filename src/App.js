import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Import Layout
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Import Routes
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';

// Renders App Components
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
