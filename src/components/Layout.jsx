import { Navigate, Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout({ usuario, setUsuario }) {
  // Proteção: se não estiver logado, redireciona para o login
  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div style={{width: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar aparece em todas as telas que usam este layout */}

          <Navbar usuario={usuario} setUsuario={setUsuario} />
          
          {/* Área dinâmica onde o conteúdo das páginas será injetado */}
          <main style={{ padding: '0px', flex: 1, backgroundColor: '#c4c4c4' }}>
        <Outlet />
      </main>
    </div>
  );
}