import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/main.css';


import CrudProducts from "./CrudProducts";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CrudProducts/>    
    </React.StrictMode>
);
