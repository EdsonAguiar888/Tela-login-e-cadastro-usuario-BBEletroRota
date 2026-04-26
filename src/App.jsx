
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



// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import { useState } from 'react';
// import Login from './pages/Login';
// import Home from './pages/Home';
// import Projetos from './pages/Projetos'; // Uma possível nova tela

// function App() {
//   const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuarioLogado')));

//   // Componente de Proteção
//   const PrivateRoute = ({ children }) => {
//     return usuario ? children : <Navigate to="/login" />;
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Rota Pública */}
//       <Route path="/login" element={<Login onLoginSuccess={(u) => setUsuario(u)} />} />




//             {/* <Route path="/login" element={<Login onLoginSuccess={handleLogin} />} /> */}

//             <Route 
//               path="/" 
//               element={usuario ? <Home usuario={usuario} /> : <Navigate to="/login" />} 
//             />
      


//         Rotas Privadas
//         <Route path="/" element={
//           <PrivateRoute>
//             <Home usuario={usuario} />
//           </PrivateRoute>
//         } />

        

//         {/* <Route path="/home" element={
//           <PrivateRoute>
//             <Home />
//           </PrivateRoute>
//         } /> */}

//         <Route path="/projetos" element={
//           <PrivateRoute>
//             <Projetos />
//           </PrivateRoute>
//         } />


//         {/* Redireciona qualquer rota desconhecida para o Login ou Home */}
//         <Route path="*" element={<Navigate to={usuario ? "/" : "/login"} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




