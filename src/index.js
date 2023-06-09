import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './rotas/Login';
import Dashboard from './rotas/Dashboard';
import Perfil from './rotas/Perfil';
import MostrarVendas from './rotas/MostrarVendas';
import NovaVenda from './rotas/NovaVenda';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/vendas/usuario/:id' element={<p>oi</p>}/>
        <Route path='/usuario/2/dashboard' element={<Dashboard/>}/>
        <Route path='/usuario/2/perfil' element={<Perfil/>}/>
        <Route path='/usuario/2/cadastrarvenda' element={<MostrarVendas />} />
        <Route path='/usuario/2/cadastrarvenda_new' element={<NovaVenda />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
