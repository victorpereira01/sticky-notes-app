import React from 'react';
import { BrowserRouter, Router} from 'react-router-dom';

import './styles.css'

import Header from './components/Header'
import Main from './pages/Main'

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
