
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Auth from './pages/Login'; 
import Home from './pages/Home';
import GerenciarUsuarios from './pages/GerenciarUsuarios'; // Importe a nova tela
import EditarPerfil from './pages/EditarPerfil';
import Navbar from './components/Navbar';
import Layout from './components/Layout';


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
        {/* Rota de login pública */}
        <Route 
          path="/login" 
          element={usuario ? <Navigate to="/" /> : <Auth onLoginSuccess={handleLogin} />} 
        />
        
        {/* Rotas protegidas utilizando o Layout independente */}
        <Route element={<Layout usuario={usuario} setUsuario={setUsuario} />}>
          <Route path="/" element={<Home usuario={usuario} setUsuario={setUsuario} />} />
          <Route path="/gerenciar" element={<GerenciarUsuarios />} />
          <Route path="/editarPerfil" element={<EditarPerfil />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

