
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Auth from './pages/Login'; 
import Home from './pages/Home';

function App() {
  const [usuario, setUsuario] = useState(() => {
    const salvo = localStorage.getItem('usuarioLogado');
    return salvo ? JSON.parse(salvo) : null;
  });

  const handleLogin = (dados) => {
    localStorage.setItem('usuarioLogado', JSON.stringify(dados));
    setUsuario(dados);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={usuario ? <Navigate to="/" /> : <Auth onLoginSuccess={handleLogin} />} 
        />
        <Route 
          path="/" 
          element={usuario ? <Home usuario={usuario} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

