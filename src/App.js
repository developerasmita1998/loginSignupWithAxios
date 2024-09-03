import './App.css';
import React from 'react';
import Signup from './Signup';
//@ts-ignore
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Login/>}/>
        <Route path='/signup'element={<Signup/>}/>

      </Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
