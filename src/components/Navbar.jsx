import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoBB from '../assets/LogoBB.png';


export default function Navbar({ usuario, setUsuario }) {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');


  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
    navigate('/home', { replace: true });
  };

  const handleBusca = (e) => {
    e.preventDefault();
    if (busca.trim()) {
      navigate(`/busca?q=${encodeURIComponent(busca.trim())}`);
    }
  };

return (
    <header className="bb-header">   
        {/* Barra superior */}
        <div className="bb-topbar">
          <div className="bb-topbar-left">
            <Link to="/" className="bb-logo">
                <img src={LogoBB} alt="Logo do Banco do Brasil" /> 
                <span className="bb-logo-text">
                  BB <span className="bb-logo-yellow">EletroRota</span>
                </span>
            </Link>
          </div>

          <nav className="bb-topnav">
              <Link to="#">Para Você</Link>
              <Link to="#">Para sua Empresa</Link>
              <Link to="#">Agronegócios</Link>
              <Link to="#">Setor Público</Link>
          </nav>

          <div className="bb-topbar-right">
              <form className="bb-search-form" onSubmit={handleBusca}>
                  <input
                    type="text"
                    className="bb-search-input"
                    placeholder="Busque no site"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                  <SearchIcon className='bb-search-icon'/>
              </form>
          
          {usuario ? (
            <div className="bb-user-area">
              <Link to="/editarPerfil" className="bb-account-btn">
                  <span>{usuario?.nome}</span>
              </Link>
              <button className="bb-logout-btn" onClick={handleLogout}>
                  Sair
              </button>
            </div>
          ) : (
              <Link to="/login" className="bb-account-btn">
                  <PermIdentityIcon />
                  <span>Acessar a sua conta</span>
              </Link>
            )}
          </div>
        </div>

        {/* Barra de navegação secundária */}
        <nav className="bb-mainnav">
            <Link to="/">Início</Link>
            <Link to="/gerenciar">Gerenciar Usuários</Link>
            <Link to="/mapas">Mapas</Link>
            <Link to="#">Atendimento</Link>
            <Link to="#">Sobre</Link>
            <Link to="#">Busca</Link>
        </nav>

    </header>
  );
}
