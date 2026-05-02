import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ usuario, setUsuario }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
    navigate('/login');
  };

  return (
    <nav style={{
      padding: '15px 30px', 
      background: '#ffdf00', 
      color: '#2116b8', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Porto Integrador</h1>
      
      <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', margin: 0, padding: 0 }}>
        <li>
          <Link to="/" style={{ color: '#2116b8', textDecoration: 'none', fontWeight: '500' }}>Início</Link>
        </li>
        <li>
          <Link to="/gerenciar" style={{ color: '#2116b8', textDecoration: 'none', fontWeight: '500' }}>Gerenciar Usuários</Link>
        </li>
        <li>
          <Link to="#" style={{ color: '#2116b8', textDecoration: 'none', fontWeight: '500' }}>Mapas</Link>
        </li>
      </ul>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {/* <span>Bem-vindo, <strong><a href="/editarPerfil">{usuario?.nome}</a></strong></span> */}
        <Link to="/editarPerfil" style={{ color: '#2116b8', textDecoration: 'none', fontWeight: '500' }}>Bem vindo, <strong>{usuario?.nome}</strong></Link>
        
        <div className='botaoSair'>
        <button 
          onClick={handleLogout} 
          style={{
            background: '#2116b8', 
            color: '#fff', 
            border: 'none', 
            padding: '8px 15px', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Sair
        </button>
        </div>
      </div>
    </nav>
  );
}