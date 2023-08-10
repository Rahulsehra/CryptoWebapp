import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Show from './Pages/Show';
import './index.css'
// import './style.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route index element={<Home/>} />
    <Route path="/:id" element={<Show/>} />
  </Routes>
  </BrowserRouter>,
)
