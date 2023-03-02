import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { BrowserRouter } from 'react-router-dom'

console.log(process.env)
const container = document.getElementById('root')
const root = createRoot(container) 
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)


