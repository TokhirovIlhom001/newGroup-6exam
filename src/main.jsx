import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
// import {  CartcontextProvider } from './components/CartContext/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    // <CartcontextProvider>
        <App />
    // </CartcontextProvider>
)
