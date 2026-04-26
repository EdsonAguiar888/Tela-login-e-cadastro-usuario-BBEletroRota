

import { useNavigate, Link } from 'react-router-dom';
import "/style.css";

export default function Home({ usuario }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    window.location.reload(); // Recarrega para limpar o estado do App
  };

  return (


    <body>

<header class="topbar">
  <div class="logo">BANCO DO BRASIL</div>
  <nav>
    <a href="#">Início</a>
    <a href="#">Para Você</a>
    <a href="#">Para Empresas</a>
    <a href="#">Acesso à Conta</a>
    <button class = "button-logout" onClick={handleLogout}>Sair</button>
  </nav>
</header>

<div class="hero1">
  <div class="hero">
    

    <div>

    </div>

    
  </div>
</div>

  <section class="cards">
    <div class="card" id = "estacoes" > 
      ⚡
      <h3>Encontre Estações de Carga</h3>
      <p>Veja os pontos de recarga próximos.</p>
    
    </div>

    <div class="card" id = "autonomia" onclick="acao('autonomia')">
      🔋
      <h3>Calculadora de Autonomia</h3>
      <p>Calcule até onde você pode chegar.</p>
      
    </div>

    <div class="card" id = "viagem" onclick="acao('viagem')">
      📍
      <h3>Planejar Viagem</h3>
      <p>Planeje sua rota com paradas.</p>
    </div>

    <div class="card" id = "cadastro" onclick="acao('cadastro')">
      🚗
      <h3>Cadastro do Meu Carro</h3>
      <p>Salve seu veículo.</p>
    </div>
  </section>


<div class="station">
  <h2>Estação Recomendada Mais Próxima</h2>

  <div class="station-box">
    <div class="map">📍</div>

    <div class="info">
      <h3>Eletroposto Central</h3>
      <p>🔌 3 carregadores disponíveis</p>
      <p>⏱ 2 min de espera</p>
      <p>📏 5,2 km de distância</p>

      <button onclick="navegar()">Navegar até a estação</button>
    </div>
  </div>
</div>


</body>





    // <nav>
    //   <h1>Porto Integrador</h1>
    //   <ul>
    //     <li><Link to="/">Início</Link></li>
    //     <li><Link to="/projetos">Meus Projetos</Link></li>
    //   </ul>
    //   <button onClick={handleLogout}>Sair</button>
    // </nav>
  );
}




