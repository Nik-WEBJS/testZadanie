/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/*import Prihod from './components/Prihod.jsx';*/
import './App.css'
import React from 'react'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import KontrAgent from './components/KontrAgent.jsx'
import Prihod from './components/Prihod.jsx'
import Input from './components/Input/Input.jsx'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />   
      <Navbar />
      <div className="app-wrapper-content">
      <Route path='/Input' component={Input}/>
        <Route path='/KontrAgent' component={KontrAgent}/>
        <Route path='/Prihod' component={Prihod}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
