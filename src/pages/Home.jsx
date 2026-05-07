import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import '../pages/home.css';
import imagemCarro from '../assets/imagemCarro.png';

export default function Home({ usuario, setUsuario }) {

  const irParaCadastro = () => {
    // Navega para o login, mas envia um estado interno dizendo "isRegister: true"
    navigate('/login', { state: { screen: 'register' } });
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
    navigate('/home');
  };

  return (

    <div>

      {/* Exibição da Imagem */}
      <div style={{}}>
        <img
          src={imagemCarro}
          alt="Carro elétrico do projeto bbEletroRota"
          style={{
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            display: 'block',
            imageRendering: 'high-quality',
            objectFit: 'cover'
          }}
        />
      </div>


      {/* <h1>Deslogado</h1> */}


      <section className="cards">

        <a className="card" id="estacoes" >
          ⚡
          <h3>Encontre Estações de Carga</h3>
          <p>Veja os pontos de recarga próximos.</p>

        </a>

        <a className="card" id="autonomia" >
          🔋
          <h3>Calculadora de Autonomia</h3>
          <p>Calcule até onde você pode chegar.</p>

        </a>

        <a className="card" id="viagem">
          📍
          <h3>Planejar Viagem</h3>
          <p>Planeje sua rota com paradas.</p>
        </a>

        <a className="card" id="cadastro" href="/gerenciar" >
          🚗
          <h3>Cadastro do Meu Carro</h3>
          <p>Salve seu veículo.</p>
        </a>

      </section>


      <div className="painel-mapa">
        <div className="station">
          <h2>Estação Recomendada Mais Próxima</h2>

          <div className="station-box">
            <div className="map">📍</div>

            <div className="info">
              <h3>Eletroposto Central</h3>
              <p>🔌 3 carregadores disponíveis</p>
              <p>⏱ 2 min de espera</p>
              <p>📏 5,2 km de distância</p>
              <button >Navegar até a estação</button>
            </div>
          </div>
        </div>


        <div className='station' style={{ fontFamily: 'sans-serif' }}>
          <h2>Painel Principal</h2>
          <div className="station-box">
            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ marginTop: '0', color: '#333' }}>Informações do Veículo</h3>

              <p><strong>Usuário:</strong> </p>
              <p><strong>Marca/Modelo:</strong></p>
              <p><strong>Potência:</strong></p>
              <p><strong>Bateria Atual:</strong> </p>

              <button

                style={{
                  backgroundColor: '#3498db',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginTop: '10px'
                }}
              >
                Simular Consumo (-10% bateria)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}