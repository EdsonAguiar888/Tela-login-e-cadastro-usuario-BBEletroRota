
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
//import "/style.css";




import '../../style.css';

export default function Home({ usuario, setUsuario }) {
  const navigate = useNavigate();
  const [bateria, setBateria] = useState(usuario.veiculo?.bateriaAtual || 0);


  const irParaCadastro = () => {
    // Navega para o login, mas envia um estado interno dizendo "isRegister: true"
    navigate('/login', { state: { screen: 'register' } });
  };

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuario(null);
    navigate('/login');
  };

  // // funcionando
  // const handleLogout = () => {
  //   localStorage.removeItem('usuarioLogado');
  //   window.location.reload(); // Recarrega para limpar o estado do App
  // };


  if (!usuario) return null;

  //Display dados e botao inserir bateria atual

  const alterarBateria = async () => {
    // Exemplo: Simula o consumo da bateria reduzindo 10%, com limite mínimo em 0%
    const novoValor = Math.max(0, parseInt(bateria) - 10);

    // Atualiza o estado visual
    setBateria(novoValor);

    // Prepara o objeto atualizado do usuário
    const usuarioAtualizado = {
      ...usuario,
      veiculo: {
        ...usuario.veiculo,
        bateriaAtual: novoValor
      }
    };

    try {
      // 1. Atualiza o JSON Server via método PUT
      await fetch(`http://localhost:3001/usuarios/${usuario.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuarioAtualizado)
      });

      // 2. Atualiza o localStorage para persistir após F5
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioAtualizado));

      // 3. Atualiza o estado global no App para refletir na Navbar
      setUsuario(usuarioAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar a bateria:', error);
    }
  };

  // Se por algum motivo o usuário não existir na memória
  if (!usuario) return <p>Carregando...</p>;


  return (


    <div>
      {/* <header className="topbar">
        <div className="logo">BANCO DO BRASIL</div>
        <nav className='navbar'>
          <a href="/">Início</a>
          <a href="/gerenciar">Usuarios</a>
          <a href="#">Para Empresas</a>
          <a href="#">Acesso à Conta</a>
          <button className="button-logout" onClick={handleLogout}>Sair</button>
        </nav>
      </header> */}

      <div className="hero1">
        <div className="hero">


          <div>

          </div>


        </div>
      </div>

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


          <div className='station' style={{  fontFamily: 'sans-serif' }}>
            <h2>Painel Principal</h2>
           <div className="station-box">
            

            <div style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ marginTop: '0', color: '#333' }}>Informações do Veículo</h3>

              <p><strong>Usuário:</strong> {usuario.nome}</p>
              <p><strong>Marca/Modelo:</strong> {usuario.veiculo?.marca || 'Não informada'}</p>
              <p><strong>Potência:</strong> {usuario.veiculo?.potencia || 'Não informada'}</p>
              <p><strong>Bateria Atual:</strong> {bateria}%</p>

              <button
                onClick={alterarBateria}
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




